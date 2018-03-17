var app = angular.module("appFilter",[]);

app.controller('filterCtrl',filterCtrl);

function filterCtrl($scope) {
    var techonologis = [
        {Name: "C#",Likes: 0,Dislikes: 3},
        {Name: "java",Likes: 1,Dislikes: 2},
        {Name: "python",Likes: 2,Dislikes: 1},
        {Name: "Ruby",Likes: 3,Dislikes: 0}
    ];
    $scope.tech = techonologis;
    $scope.name = "techonologis";
    $scope.increaLike = function (techo) {
        techo.Likes ++;
    };
    $scope.decreaLike = function (techo) {
        techo.Likes --;
    };
}
