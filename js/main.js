var app = angular.module("MJSC-APP", ["ngRoute"]);

app.config(function ($routeProvider, $locationProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "templates/home.html"
        })
        .when("/contact", {
            templateUrl: "templates/contact.html"
        })
        .when("/schedule", {
            templateUrl: "templates/schedule.html"
        })
        .when("/sponsorships", {
            templateUrl: "templates/sponsorship.html"
        })
        .when("/about", {
            templateUrl: "templates/about.html"
        })
        .otherwise({
            templateUrl: "templates/home.html"
        });
    $locationProvider.html5Mode(true)

});

app.controller("Main-Controller", ["$scope", function ($scope) {
    $scope.test = "Hello"

}]);
