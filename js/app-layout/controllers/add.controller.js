let AddController = function($scope,LocalizeService, UserService, $cookies) {
  
  let vm = this;
  vm.addEvent = addEvent;
  $scope.user = UserService.getUserInfo();

  function addEvent(eventObj){
    //let user = UserService.getUserInfo();
    LocalizeService.addEvent(eventObj, user).then((res)=>{
      console.log(res);
    });
  }
};

AddController.$inject = ['$scope','LocalizeService','UserService','$cookies'];

export default AddController;
 




  // $scope.rate = 5;
  // $scope.max = 10;
  // $scope.isReadonly = false;

  // $scope.hoveringOver = function(value) {
  //   $scope.overStar = value;
  //   $scope.percent = 100 * (value / $scope.max);
  // };

  // $scope.ratingStates = [
  //   {stateOn: 'fa-check-circle', stateOff: 'fa-check-circle-o'},
  //   {stateOn: 'fa-star', stateOff: 'fa-start-o'},
  //   {stateOn: 'fa-heart', stateOff: 'fa-ban'},
  //   {stateOn: 'fa-heart'},
  //   {stateOff: 'fa-power-off'}
  // ];