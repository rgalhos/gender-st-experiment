angular.module("tutor", ["ngRoute", "ngResource", "ngAnimate", "ngMaterial", "ngCanvasGauge","tutor.services"]).config(function($routeProvider) {

    var routes = Object.keys(config.routes);
    for (var i = 0; i < routes.length; i++) {
        var route = config.routes[routes[i]];

        $routeProvider.when(routes[i], route);
    }

    $routeProvider.otherwise({
        redirectTo: config.route404
    });
    
    /*
    $routeProvider.
    when("/pretest", {
        templateUrl: "views/pretest.html",
        controller: "PretestCtrl"
    }).
    when("/home", {
        templateUrl: "views/home.html",
        controller: "HomeCtrl"
    }).
    when("/posttest", {
        templateUrl: "views/posttest.html",
        controller: "PosttestCtrl"
    }).
    when("/finish", {
        templateUrl: "views/finish.html",
        controller: "FinishCtrl"
    }).
    otherwise({
        redirectTo: config["404"]
    });
    */

}).config(function($mdThemingProvider) {

    $mdThemingProvider.alwaysWatchTheme(true);

    var customPalettes = Object.keys(config.customPalettes);
    for (var i = 0; i < customPalettes.length; i++) {
        var paletteName = customPalettes[i];
        var palette = config.customPalettes[paletteName];

        console.dir(paletteName);
        console.dir(palette);

        if (!!palette.extends) {
            var _extends = palette.extends;
            delete palette.extends;
            var extendedTheme = $mdThemingProvider.extendPalette(_extends, palette);

            $mdThemingProvider.definePalette(paletteName, extendedTheme);
        } else {
            $mdThemingProvider.definePalette(paletteName, palette);
        }
    }

    var themes = Object.keys(config.themes);
    for (var i = 0; i < themes.length; i++) {
        var themeName = themes[i];
        var theme = config.themes[themeName];

        $mdThemingProvider.theme(themeName)
            .primaryPalette(theme.primaryPalette)
            .accentPalette(theme.accentPalette)
            .warnPalette(theme.warnPalette)
        ;
    }

});

//GLOBAL - FACEBOOK API
window.fbAsyncInit = function() {
    FB.init({
        appId: '259201801144935',
        xfbml: true,
        version: 'v2.8'
    });
};

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "libs/facebook/facebook.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
