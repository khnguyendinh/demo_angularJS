var myApp = angular.module("directiveModule",[]);

myApp.controller("Ctrl",Ctrl);
myApp.directive("initDirective",initDirective);
function Ctrl($scope) {
    $scope.name = " directive demo";
}
function initDirective() {
    var html = "<h1>demo directive</h1>"
    return {
        // template : html
        templateUrl : "demoDirective.html"
    }
    
}
