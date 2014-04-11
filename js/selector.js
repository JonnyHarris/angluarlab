			var demoApp2 = angular.module('demoAppModuleName',['ngRoute']);
			
			demoApp2.config(function($routeProvider) {
				$routeProvider
				.when('/view1',
				{
					controller: 'SimpleController',
					templateUrl: 'app/views/View1.html'
				})
				.when('/view2',
				{
					controller: 'SimpleController',
					templateUrl: 'app/views/View2.html'
				})
				.otherwise({ redirectTo: '/view1'});
			});
			
			demoApp2.controller('SimpleController', 
			function ($scope) {
				$scope.customers=[
					{name:'TEd Bundy',city:'Wexxford'},
					{name:'Tim Roth',city:'Dubblin'},
					{name:'Zed DeTed',city:'Belllfast'},
					{name:'Shiva DeBack',city:'Galwway'}
				];
				$scope.addCustomer=function () {
					$scope.customers.push(
					{
						name: $scope.newCustomer.name, 
						city: $scope.newCustomer.city
					});
				};
			});
			
