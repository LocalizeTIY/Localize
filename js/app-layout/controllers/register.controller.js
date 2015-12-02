let RegisterController = function(UserService) {
  
  let vm = this;

  vm.signUp = signUp;

  function signUp (user) {
    console.log(user);
    UserService.signup(user).then( (res) => {
      console.log(res.data);
    });
  }

};

RegisterController.$inject = ['UserService'];

export default RegisterController;