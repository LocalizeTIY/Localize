let DashboardController = function (DashboardService, $scope, $stateParams, $state, LocalizeService) {

  let thisUser = $stateParams.createdby;

  $scope.createdby = thisUser;

  
  let vm = this;
  vm.events = [];
  vm.clicked = clicked;

  activate();

  function activate() {
  	DashboardService.getAllEvents().then((res)=>{
  		vm.events = res.data.results;
  		console.log('dashboardController?');
  		console.log(vm.events);
  	});
  }

  function events(eventObj){
  	DashboardService.events(data).then((res)=>{
  		console.log(res);
  	});
  }

  function clicked (event){
  	console.log('clicked', event.name);
  }

  

};

DashboardController.$inject = ['DashboardService', '$scope', '$stateParams', '$state', 'LocalizeService'];

export default DashboardController;