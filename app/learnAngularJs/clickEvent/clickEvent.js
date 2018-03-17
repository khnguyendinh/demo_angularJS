var app = angular.module("appClick",[]);

app.controller('handleEvent',clickEvent);
function Ctrl($scope) {
    $scope.name = " ng Repeat demo";
    var techonologis = [
        {Name: "C#",Likes: 0,Dislikes: 3},
        {Name: "java",Likes: 1,Dislikes: 2},
    ];
    $scope.tech = techonologis;
}

function clickEvent($scope) {
    var techonologis = [
        {Name: "C#",Likes: 0,Dislikes: 3},
        {Name: "java",Likes: 1,Dislikes: 2},
        {Name: "python",Likes: 2,Dislikes: 1},
        {Name: "Ruby",Likes: 3,Dislikes: 0}
    ];
    $scope.tech = techonologis;
    $scope.increaLike = function (techo) {
        techo.Likes ++;
    };
    $scope.decreaLike = function (techo) {
        techo.Likes --;
    };
}
