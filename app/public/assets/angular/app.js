var app = angular.module("Bluck", ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'tpl/index.html'
	})
	.otherwise({
		redirectTo: '/'
	});

	$locationProvider.html5Mode(true);
}]);

app.controller("coreController", ['$scope', function($scope){
	$scope.message = "Hello World";
}])