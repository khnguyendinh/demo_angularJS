var myApp = angular.module("bindingModule",[]);

myApp.controller("bindingCtrl",bindingCtrl);
function bindingCtrl($scope) {
    var employee = {
        FirstName:"nguyen dinh",
        LastName:"khoa",
        Gender:"male"
    }
    $scope.employee = employee;
}