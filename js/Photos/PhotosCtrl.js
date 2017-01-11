angular.module('angularDrill').controller('unsplashCtrl', function($scope, getPhotosService){
		$scope.getURLs = getPhotosService.getPhotos()
			.then(function(dataFromService) {
				$scope.urls = dataFromService;
			});
});