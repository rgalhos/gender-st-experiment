angular.module('tutor').controller("PosttestCtrl", function($scope, $location, User) {

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

    $scope.processAnswers = function() {

        if ($scope.answers.length < $scope.questions.length) {
            $scope.msg = "Por favor, responda todas as perguntas!"
        } else {

            var time = new Date().getTime();

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

            function add(a, b) {
                return parseInt(a) + parseInt(b);
            }

            User.setPosttestPoints(sum);
            User.setPost(ans);
            User.setEndTime(time);
            User.save();

            $location.path(config.pages.posttest.nextPage);

        };
    }

});
