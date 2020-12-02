
var app = angular.module('FormPocketApp', ['ngRoute', 'LocalStorageModule', 'angular-loading-bar', 'dx', 'ngSanitize', 'ngAnimate']).config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
}]);



app.config(function ($routeProvider) {
    console.log($routeProvider);

    $routeProvider.when("/dispatch", {
        controller: "DispatchController",
        templateUrl: "/app/views/Dispatch.html"
    });

    $routeProvider.when("/flightcrew", {
        controller: "FlightCrewController",
        templateUrl: "/app/views/FlightCrew.html"
    });

    $routeProvider.when("/pilot", {
        controller: "PilotController",
        templateUrl: "/app/views/Pilot.html"
    });

    $routeProvider.when("/security", {
        controller: "SecurityController",
        templateUrl: "/app/views/Security.html"
    });

    $routeProvider.when("/station", {
        controller: "StationController",
        templateUrl: "/app/views/Station.html"
    });

    $routeProvider.when("/home", {
        controller: "HomeController",
        templateUrl: "/app/views/Home.html"
    });



    $routeProvider.otherwise({ redirectTo: "/home" });



});


app.run(['$rootScope', '$location', '$templateCache', function ($rootScope, $location, $templateCache) {


    $rootScope.navigate = function (target, key, module) {
        //var rec = Enumerable.From(Config.MenuItems).Where('$.key=="' + key + '"').FirstOrDefault();
        //activityService.hitMenu(key, target, 'Visiting ' + $rootScope.module + ' > ' + rec.title, module);
        $location.path(target);

    };

    $rootScope.linkClicked = function (key) {

        $rootScope.$broadcast(key, null);
    };
}]);


