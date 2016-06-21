var app = angular.module("main", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider) {

	// Asignamos la vista a mostrar por defecto
	$urlRouterProvider.otherwise("/state1");
	
	$stateProvider
    .state('state1', {
      url: "/state1",
      templateUrl: "state1.html"
    })
    .state('state1.list', {
      url: "/list",
      templateUrl: "state1.list.html",
      controller: "State1ListController"
    })
    .state('state2', {
      url: "/state2",
      templateUrl: "state2.html"
    })
   .state('state2.list', {
      url: "/list",
      templateUrl: "state2.list.html",
      controller: function($scope) {
        $scope.things = ["A", "Set", "Of", "Things"];
      }
    })
    ;
	
	
});