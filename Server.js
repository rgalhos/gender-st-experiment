var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs')
var uuid = require('uuid');
require("dotenv").config();

const config = require("./config");

app.use(express.static("webapp"));

app.get('/', function (req, res) {
    res.redirect('/');
});

// Parses the body for POST, PUT, DELETE, etc.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/save-response", function(req, res) {
    saveResponse(req.body);

    res.end();
});

function saveResponse(body) {
    // generates a random id for the participant's response
    var respId = uuid.v1();

    // data to be saved (participant's response)
    var response = [ respId ];

    // responses from body
    for (const r of config.responsesFromBody) {
        response.push(body[r]);
    }

    response = response.join(";") + "\n";

    fs.stat("responses.csv", function(err, stat) {
        if (err == null) {
            // write the actual data and end with newline
            fs.appendFile("responses.csv", response, function(err) {
                if (err) throw err;
            });
        } else {
            var headers = [ "responseId", ...config.responsesFromBody ];
            headers = headers.join(";") + "\n";

            fs.writeFile("responses.csv", headers + response, function(err) {
                if (err) throw err;
                console.log("Response saved!");
            })
        }
    });
}

app.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, function() {
    console.log(`The server is listening to ${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`);

    if (process.env.pm_id === undefined) {
        console.warn("You are not running the server with PM2! If the server crashes it won't start again.");
    }
});
