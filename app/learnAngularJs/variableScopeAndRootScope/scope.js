var myApp = angular.module("scopeRootModule",[]);

    myApp.controller("scopeSchoolCtrl",scopeSchoolCtrl);
    myApp.controller("scopeClassCtrl",scopeClassCtrl);
    myApp.controller("topCtrl",topCtrl);
function scopeClassCtrl($scope,$rootScope) {

    $scope.name = " scopeClassCtrl";
    $rootScope.name = "This is application root scope";
    $scope.sayHello = function () {
        $rootScope.name = "This is application root scope";
    }
}
function scopeSchoolCtrl($scope,$rootScope) {

    $scope.name = " scopeSchoolCtrl";
    $scope.sayHello = function () {
        $scope.name = "Hello "+$scope.name;
    }
}
function topCtrl($scope,$rootScope) {

    $scope.name = " this is nested scope";
}