var app = angular.module("flapperNews", []);

app.controller('MainCtrl', [
	'$scope',
	function($scope){
		$scope.test = "Hello World";

		$scope.posts = [
		'1', '2', '3', '4'];
	}]);