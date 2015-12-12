let DashboardController = function (DashboardService, $scope, $stateParams, $state, $cookies, LocalizeService, UserService) {

  let thisUser = $stateParams.createdby;


  let user = UserService.getUserInfo();

  $scope.user = user;

  //console.log('in the controller',$scope.user);

  let vm = this;
  vm.events = [];
  vm.clicked = clicked;
  vm.logout = logout;

  activate();

  function activate() {
  	DashboardService.getAllEvents().then((res)=>{
  		vm.events = res.data.results;
  		//console.log('dashboardController?');
  		//console.log(vm.events);
  	});
  }

  function events(eventObj){
  	DashboardService.events(data).then((res)=>{
  		//console.log(res);
  	});
  }

  function clicked (event){
  	//console.log('clicked', event.name);
  }

  function logout(user){
  	console.log('from dashboard logout', user);
  	DashboardService.logout(user).then((res)=>{
  		console.log('res from logout', res.data);
  	})

  }

};

DashboardController.$inject = ['DashboardService', '$scope', '$stateParams', '$state', '$cookies', 'LocalizeService', 'UserService'];

export default DashboardController;