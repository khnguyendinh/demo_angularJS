var app = angular.module("appOrderBy",[]);
app.controller("orderByCtrl",orderByCtrl);
function orderByCtrl($scope) {
    var techonologis = [
        {Name: "C#1",Likes: 0,Dislikes: 300000000, BirthDay: new Date('12/3/2009'),status:true},
        {Name: "java",Likes: 1,Dislikes: 2999999, BirthDay: new Date('12/4/2009'),status:false},
        {Name: "python",Likes: 2,Dislikes: 1888888, BirthDay: new Date('12/5/2009'),status:true},
        {Name: "Ruby",Likes: 3,Dislikes: 17777770, BirthDay: new Date('12/6/2009'),status:false}
    ];
    $scope.tech = techonologis;
    $scope.shortColumn = 'name';
    $scope.increaLike = function (techo) {
        techo.Likes ++;
    };
    $scope.decreaLike = function (techo) {
        techo.Likes --;
    };
}

