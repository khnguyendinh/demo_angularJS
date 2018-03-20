var app = angular.module("app",[]);
app.controller("processingStringCtrl",processingStringCtrl);
processingStringCtrl.$inject = ['$scope','stringService'];

function processingStringCtrl($scope,stringService) {
    $scope.convertStringCtrl = function (input) {
        $scope.output = stringService.convertString(input);
    };
}

