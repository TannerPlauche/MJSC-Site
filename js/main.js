var app = angular.module("MJSC-APP", ["ngRoute"]);

app.config(function ($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "templates/home.html"
        })
        .when("/contact", {
            templateUrl: "templates/contact.html"
        })

});

app.controller("Main-Controller", ["$scope", function ($scope) {
    $scope.test = "Hello"

}]);
