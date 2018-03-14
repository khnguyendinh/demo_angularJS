// 'use strict';
var myApp = angular.module('myModule',[]);
myApp.controller('myController',myController);

function myController($scope) {
    $scope.message = "Angular JS application";

}

