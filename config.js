const fs = require("fs");

module.exports = (function() {
    const config = JSON.parse(fs.readFileSync("./config.json").toString("utf-8"));

    fs.writeFileSync("./webapp/scripts/config.js", "var config = " + JSON.stringify(config, null, 4), { encoding: "utf-8" });

    return config;
})();
