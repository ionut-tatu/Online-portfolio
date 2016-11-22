var portfolioControllers = angular.module('portfolioControllers', ['ngAnimate']);

portfolioControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {

	$http.get('js/data.json').success(function(data){
		
		$scope.projects = data;

	});

}]);



portfolioControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

	$http.get('js/data.json').success(function(data){
		
		var itemId = $routeParams.itemId;

		$scope.project = data[itemId];

		setTimeout(function(){
			$('.bxslider').bxSlider({
			  autoStart: true
			});
		}, 100);

      	if(itemId > 0) {
			$scope.prevItem = Number(itemId) - 1;
		} else {
			$scope.prevItem = data.length - 1;
		}

		if(itemId < data.length - 1) {
			$scope.nextItem = Number(itemId) + 1;
		} else {
			$scope.nextItem = 0;
		}

	});

	

}]);