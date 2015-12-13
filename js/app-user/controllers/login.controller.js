let LoginController = function(UserService, $state) {
  
  let vm = this;

  vm.login =login;
  //vm.sweetAlert = sweetAlert;

  function login(userObj){
    if(userObj){
      UserService.login(userObj).then((res)=>{
        console.log('after login',res.data);
        UserService.storeAuth(res.data);
        $state.go('root.dashboard'); //HAS TO GO TO DASHBOARD
      }).catch(()=>{
        swal('Invalid User Name or Password');
      });
    } else{
      swal('Cannot be blank!');
    }  
  }
  //sweetAlert({ text: "Here's my error message!",   type: "error",   confirmButtonText: "RETRY" });
};





LoginController.$inject = ['UserService','$state'];

export default LoginController;