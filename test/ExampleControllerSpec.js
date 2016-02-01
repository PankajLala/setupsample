describe('ExampleController', function(){
  var scope, httpBackend, controller;

  //setup
  beforeEach(module('ExampleApp'));

  beforeEach(inject(function($rootScope, $controller, $httpBackend){
    scope = $rootScope;
    controller = $controller;
    httpBackend= $httpBackend;
  }));

  //test description
  it('should query the webservice', function(){

    //training
    httpBackend.expectGET('/users').respond('[{"name": "First User"}, {"name": "Second User"}]');

    controller('ExampleController', {'$scope': scope});

    httpBackend.flush();

    scope.$apply();

    expect(scope.firstUsername).toEqual('First User');

  });
});
