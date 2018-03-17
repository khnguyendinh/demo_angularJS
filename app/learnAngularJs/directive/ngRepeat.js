var myApp = angular.module("ngRepeatModule",[]);

myApp.controller("Ctrl",Ctrl);
function Ctrl($scope) {
    $scope.name = " ng Repeat demo";
    var employees = [
        {firstName:"ben", lastName:"hasting",gender:"male",salary:400},
        {firstName:"ben1", lastName:"hasting1",gender:"female",salary:500},
        {firstName:"ben2", lastName:"hasting2",gender:"male",salary:600},
    ];
    $scope.employees = employees;
}
