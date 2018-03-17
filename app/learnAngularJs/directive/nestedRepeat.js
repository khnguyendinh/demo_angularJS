var app = angular.module("app", []);
app.controller('nestedRepeatController', nestedRepeatController);

function nestedRepeatController($scope) {
    var countries = [
        {
            name: "vietnam",
            cities: [
                {name: "Ha noi"},
                {name: "Sai gon"},
                {name: "Da nang"}
            ]
        },
        {
            name: "vietnam2",
            cities: [
                {name: "Ha noi2"},
                {name: "Sai gon2"},
                {name: "Da nang2"}
            ]
        }
    ];
    $scope.countries = countries;
};

