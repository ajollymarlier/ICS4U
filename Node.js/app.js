//Creates module for page
var app = angular.module("flapperNews", []);

//Defines controller for page
//This contains all the $scope variables that will be called by the HTML
app.controller('MainCtrl', [
	'$scope',
	function($scope){
		$scope.test = "Please";

		$scope.posts = [
		{title: 'Title 1', upvotes: 4},
		{title: 'Title 2', upvotes: 12},
		{title: 'Title 3', upvotes: 3},
		{title: 'Title 4', upvotes: 6},
		{title: 'Title 5', upvotes: 5},
		];

		$scope.addPost = function(){
			if(!$scope.title || $scope.title === "") {return;}
			$scope.posts.push({title: $scope.title, link: $scope.link, upvotes: 0});
			$scope.title = '';
			$scope.link = '';
		};

		$scope.incrementUpvotes = function (post){
			post.upvotes += 1;
		};
	}]);