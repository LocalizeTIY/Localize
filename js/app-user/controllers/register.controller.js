let RegisterController = function(UserService, $state) {
  
  let vm = this;

  vm.signUp = signUp;

  function signUp (user) {
    console.log(user);
    UserService.signup(user).then( (res) => {
      console.log(res.data);
      $state.go('root.home');
    });
  }

};

RegisterController.$inject = ['UserService', '$state'];

export default RegisterController;