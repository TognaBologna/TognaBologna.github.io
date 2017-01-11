angular.module('angularDrill', ['ui.router']).config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('Home', {
			url: '/Home',
			templateUrl: 'html/Home.html',
			controller: 'HomeCtrl'
		})
		.state('Linked', {
			url: '/LinkedIn',
			templateUrl: 'html/LinkedIn.html',
			controller: 'LinkedInCtrl'
		})
		.state('GitHub', {
			url: 'GitHub',
			templateUrl: 'html/GitHub.html',
			controller: 'GitHubCtrl'
		})
		.state('Twitter', {
			url: '/Twitter',
			templateUrl: 'html/Twitter.html',
			controller: 'TwitterCtrl'
		})
		.state('Photos', {
			url: '/Photos',
			templateUrl: 'html/Photos.html',
			controller: 'PhotosCtrl'
		})
		.state('Blog', {
			url: '/Blog',
			templateUrl: 'html/Blog.html',
			controller: 'BlogCtrl'
		})
		.state('Contact', {
			url: '/Contact',
			templateUrl: 'html/Contact.html',
			controller: 'ContactCtrl'
		});
	$urlRouterProvider
		.otherwise('/');
});