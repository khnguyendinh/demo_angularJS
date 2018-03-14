'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'learnAngularJs/bindingObjectFromControllerToView/bindingObject.html',
            controller: 'ModuleAndController'
        });
    }])

    .controller('ModuleAndController', [function() {

    }]);
