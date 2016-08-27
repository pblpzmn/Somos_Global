angular.module('starter.CategoryCtrl', [])
.controller('CategoryCtrl', function($scope, $stateParams, $timeout,  Categories, ionicMaterialInk) {
	
    $scope.$parent.clearFabs();
    $timeout(function() {
        $scope.$parent.showHeader();
        $scope.isExpanded = false;
    }, 0);
    ionicMaterialInk.displayEffect();

	console.log("id " + $stateParams.catId );
	if ($stateParams.catId === undefined){

	    $scope.allCategories = Categories.getCategories().then(function(allCategories){
			$scope.categories =  allCategories;
		    console.log( "category ctrl" );
		     console.log(  $scope.categories );
			
		});
		$scope.url = "sucategoryDetail";// este manda a los locales
	}
	
});
