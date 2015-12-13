let RegisterController = function(UserService, $state) {
  
  let vm = this;

  vm.signUp = signUp;

  function signUp (user) {
    if(user){
      console.log(user);
      UserService.signup(user).then( (res) => {
        swal('Welcome', user.username);
        $state.go('root.home');
      })
    }else{
      swal('Fields cannot be blank');
      }
  }

};

RegisterController.$inject = ['UserService', '$state'];

export default RegisterController;