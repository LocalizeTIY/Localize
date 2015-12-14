let DashboardController = function (DashboardService, $scope, $stateParams, $state, $cookies, LocalizeService, UserService) {




  let user = UserService.getUserInfo();

  $scope.user = user;

  //console.log('in the controller',$scope.user);

  let vm = this;

  vm.logout = logout;

  activate();

  function activate() {
  	DashboardService.getAllEvents(user).then((res)=>{
  		if(user){
  			vm.events = res.data.results;
  			console.log('vm.events', vm.events);
  			//DashboardService.Events(vm.events, user).then((res2)=>{
  			//})
  		}
  	});
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