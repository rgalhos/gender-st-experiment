angular.module('tutor').controller("PretestCtrl", function($scope, $window, $location, configService, User) {

    var themes = Object.keys(config.themes);

    var random = Math.floor((Math.random() * 10000)) % themes.length;

    $scope.questions = [];
    $scope.answers = [];

    var pretestQuestions = config.pages.pretest.questions;

    for (var i = 0; i < pretestQuestions.length; i++) {
        if (typeof pretestQuestions[i] == "string") {
            $scope.questions.push(pretestQuestions[i]);
        } else {
            $scope.questions.push(pretestQuestions[i].string);
        }
    }

    $scope.setTime = function() {
        var time = new Date().getTime();
        User.setStartTime(time);
    };

    $scope.processAnswers = function() {

        //console.log($scope.answers);
        //  validation
        if ($scope.answers.length < $scope.questions.length) {
            $scope.msg = "Por favor, responda todas as perguntas!"
        } else {
            function add(a, b) {
                return parseInt(a) + parseInt(b);
            };

            var ans = $scope.answers;
            console.log(ans);

            //invert positive answers
            for (var i = 0; i < pretestQuestions.length; i++) {
                if (typeof pretestQuestions[i] != "string") {
                    if (!!pretestQuestions[i].invert) {
                        ans[i] = 5 - ans[i];
                    }
                }
            }

            var sum = ans.reduce(add, 0);

            console.log(ans);
            console.log("PRETEST: " + sum);

            configService.setTheme(themes[random]);
            User.setGender($scope.gender);
            User.setAge($scope.age);
            User.setTestType(themes[random]);
            User.setPretestPoints(sum);
            User.setPre(ans);

            console.log(User.getResponse());
            // User.save();
            $location.path(config.pages.pretest.nextPage);

        };

    };
});
