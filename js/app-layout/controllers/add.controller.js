let AddController = function($scope,LocalizeService, UserService, $cookies, UploadService,$state) {
  
  let vm = this;
  vm.addEvent = addEvent;
  vm.uploadFile = uploadFile;
  vm.imageUploaded = false;
  vm.image = '';
  vm.validateName = validateName;
  vm.validateDate = validateDate;
  vm.validateTime = validateTime;
  vm.validateLocation = validateLocation;
  vm.validateComments = validateComments;
  vm.validateTags = validateTags;

  $scope.user = UserService.getUserInfo();



  vm.image = UploadService.tempImage;

  function addEvent(eventObj){
    let user = UserService.getUserInfo();
    eventObj.picture = vm.image;
    LocalizeService.addEvent(eventObj, user).then((res)=>{
      $state.go('root.dashboard');
    });
  }
 
  function uploadFile () {
    let file = document.getElementById('eventImage').files[0];
    UploadService.upload(file).then((res)=>{
      vm.imageUploaded = true;
      vm.image = res.data.url;
    });
  }

  // VALIDATE NAME
  let validateName = (name)=>{
    if (name.length<= 1){
      vm.errNameMsg= "Field Cannot be blank";
      console.log(vm.errNameMsg);
    }else{
      vm.errNameMsg ='';
    }
  };

  $scope.$watch('eventObj.name',function(newVal, prevVal){
    if(!newVal) return;
    validateName(newVal);
  });

   //------ VALIDATE DATE
  let validateDate = (date)=>{
    if (date.length<= 1){
      vm.errDateMsg= "Field Cannot be blank";
    }else{
      vm.errDateMsg ='';
    }
  };

  $scope.$watch('eventObj.date',function(newVal, prevVal){
    if(!newVal) return;
    validateDate(newVal);
  });

   //----- VALIDATE TIME
  let validateTime = (time)=>{
    if (time.length<= 1){
      vm.errTimeMsg= "Field Cannot be blank";
      console.log(vm.errTimeMsg);
    }else{
      vm.errTimeMsg ='';
    }
  };

  $scope.$watch('eventObj.time',function(newVal, prevVal){
    if(!newVal) return;
    validateTime(newVal);
  });

   //----- VALIDATE LOCATION
  let validateLocation = (eventObj)=>{
    if (location.length<= 1){
      vm.errLocationMsg= "Field Cannot be blank";
    }else{
      vm.errLocationMsg ='';
    }
  };

  $scope.$watch('eventObj.location',function(newVal, prevVal){
    if(!newVal) return;
    validateLocation(newVal);
  });

   //---- VALIDATE DETAILS
  let validateComments = (comments)=>{
    if (comments.length<= 1){
      vm.errDetailMsg= "Field Cannot be blank";
    }else{
      vm.errDetailMsg ='';
    }
  };

  $scope.$watch('eventObj.comments',function(newVal, prevVal){
    if(!newVal) return;
    validateCommets(newVal);
  });


   //---- VALIDATE TAG
  let validateTags = (tags)=>{
    if (tags.length<= 1){
      vm.errTagsMsg= "Field Cannot be blank";
    }else{
      vm.errTagsMsg ='';
    }
  };

  $scope.$watch('eventObj.tags',function(newVal, prevVal){
    if(!newVal) return;
    validateTags(newVal);
  });



};

AddController.$inject = ['$scope','LocalizeService','UserService','$cookies', 'UploadService','$state'];

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