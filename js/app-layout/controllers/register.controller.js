let RegisterController = function(UserService) {
  
  let vm = this;

  vm.signUp = signUp;

  function signUp (user) {
    UserService.signup(user).then( (res) => {
      UserService.storeAuth(res.data);
    });
  }

};

RegisterController.$inject = ['UserService'];

export default RegisterController;