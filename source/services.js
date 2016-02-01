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
