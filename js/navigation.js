/**
 * Created by Malteh on 10/1/2015.
 */
var myApp = angular.module('myApp', ["ui.router"])
myApp.config(function($stateProvider, $urlRouterProvider){
    console.log("navigation.js is running");
    // For any unmatched url, send to /route1
    $urlRouterProvider.otherwise("partials/Hjem")

    $stateProvider
        .state('Subview1', {
            url: "/Subview1",
            templateUrl: "partials/Subview1.html"
        })
        .state('route1.list', {
            url: "/list",
            templateUrl: "route1.list.html",
            controller: function($scope){
                $scope.items = ["A", "List", "Of", "Items"];
            }
        })

        .state('Subview2', {
            url: "/Subview2",
            templateUrl: "partials/Subview2.html"
        })
        .state('route2.list', {
            url: "/list",
            templateUrl: "route2.list.html",
            controller: function($scope){
                $scope.things = ["A", "Set", "Of", "Things"];
            }
        })
        .state('Hjem', {
            url: "/Hjem",
            templateUrl: "partials/Hjem.html"
        })
        .state('Kontakt', {
            url: "/Kontakt",
            templateUrl: "partials/Kontakt.html"
        })
        .state('Om', {
            url: "/Om",
            templateUrl: "partials/Om.html"
        })
})