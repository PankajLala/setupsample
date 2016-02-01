var contollers = angular.module('ExampleApp.controllers', [])
    .controller('ExampleController', function($scope, UserdataService){
        UserdataService.getFirstUserName().then(function(firstUsername){
          $scope.firstUsername = firstUsername;
        });
    });
