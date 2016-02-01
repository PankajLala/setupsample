var app = angular.module('ExampleApp',[
  'restangular',
  'ExampleApp.controllers',
  'ExampleApp.services'
]);

var contollers = angular.module('ExampleApp.controllers', [])
    .controller('ExampleController', function($scope, UserdataService){
        UserdataService.getFirstUserName().then(function(firstUsername){
          $scope.firstUsername = firstUsername;
        });
    });

//userdataservice for accessing user information
var services = angular.module('ExampleApp.services', [])
    .factory('UserdataService', ['Restangular', '$q', function UserdataService(Restangular, $q){
      return{
        getFirstUserName: function(){
          var firstUsernameDeferred = $q.defer();
          var response = Restangular.one('users').getList().then(function(response){
            firstUsernameDeferred.resolve(response[0].name);
          });
          return firstUsernameDeferred.promise;
        }
      };
}]);
