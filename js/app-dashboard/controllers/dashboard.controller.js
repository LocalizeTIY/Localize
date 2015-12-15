let DashboardController = function (DashboardService, $scope, $stateParams, $state, $cookies, LocalizeService, UserService) {




  let user = UserService.getUserInfo();

  $scope.user = user;
  let objId ={};


  //console.log('in the controller',$scope.user);

  let vm = this;

  vm.logout = logout;

  vm.addRating = addRating;
  
  activate();

  function activate() {
  	DashboardService.getAllEvents(user).then((res)=>{
  		if(user){
  			vm.events = res.data.results;

  			//console.log('vm.events', vm.events;
  		}
  	});
  }

// USER CAN ADD RATINGS TO THEIR OWN EVENTS

  function addRating(eventObj, objId) {
    console.log('addRating', eventObj, objId);
    DashboardService.addRating(eventObj, objId).then((res)=>{
      console.log('eventObj deom controller then part',objId);
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