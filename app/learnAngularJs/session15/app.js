var app = angular.module("app",[]);
app.controller("wsCtrl",wsCtrl);
wsCtrl.$inject = ['$scope','$http'];
function wsCtrl($scope,$http) {
    $http.get('https://jsonplaceholder.typicode.com/posts').then(function (response) {
        $scope.books = response.data;
    });
}

