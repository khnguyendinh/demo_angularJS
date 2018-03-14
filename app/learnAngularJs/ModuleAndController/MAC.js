'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'learnAngularJs/ModuleAndController/MAC.html',
    controller: 'ModuleAndController'
  });
}])

.controller('ModuleAndController', [function() {

}]);
