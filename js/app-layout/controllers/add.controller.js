let AddController = function($scope,LocalizeService, UserService, $cookies, UploadService) {
  
  let vm = this;
  vm.addEvent = addEvent;
  vm.uploadFile = uploadFile;
  vm.imageUploaded = false;
  vm.image = '';
  $scope.user = UserService.getUserInfo();



  vm.image = UploadService.tempImage;

  function addEvent(eventObj){
    let user = UserService.getUserInfo();
    eventObj.picture = vm.image;
    LocalizeService.addEvent(eventObj, user).then((res)=>{
      console.log(res);
      
    });
  }
 
  function uploadFile () {
    let file = document.getElementById('eventImage').files[0];
    UploadService.upload(file).then((res)=>{
      vm.imageUploaded = true;
      vm.image = res.data.url;

    });
  }

};

AddController.$inject = ['$scope','LocalizeService','UserService','$cookies', 'UploadService'];

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