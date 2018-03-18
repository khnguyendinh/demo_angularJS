var app = angular.module("appFilter",[]);

app.controller('filterCtrl',filterCtrl);

function filterCtrl($scope) {
    var techonologis = [
        {Name: "C#",Likes: 0,Dislikes: 300000000, BirthDay: new Date('12/3/2009'),status:true},
        {Name: "java",Likes: 1,Dislikes: 2999999, BirthDay: new Date('12/4/2009'),status:false},
        {Name: "python",Likes: 2,Dislikes: 1888888, BirthDay: new Date('12/5/2009'),status:true},
        {Name: "Ruby",Likes: 3,Dislikes: 17777770, BirthDay: new Date('12/6/2009'),status:false}
    ];
    $scope.tech = techonologis;
    $scope.name = "techonologis";
    $scope.limitRow = 3;
    $scope.increaLike = function (techo) {
        techo.Likes ++;
    };
    $scope.decreaLike = function (techo) {
        techo.Likes --;
    };
}
app.filter("status",function (d) {
    return function (input) {
        if(input == true){
            return "kich hoat";
        }
        return "khoa";
    }
});
