let SingleFeatureController = function ($scope, $stateParams, $http, $state, FeaturedService) {

	let vm = this;
	vm.singleFeature = singleFeature;
	
	console.log($stateParams.name);
	console.log($stateParams);

	$scope.singleName = $stateParams.name;

	$scope.name = $stateParams;

	FeaturedService.showingSingleFeature($stateParams).then((response) =>{
		console.log($stateParams);
		console.log(response.data);
		$scope.singleFeature = response.data;
	});


};

SingleFeatureController.$inject = ['$scope', '$stateParams', '$http', '$state', 'FeaturedService'];

export default SingleFeatureController;