let LoginController = function(UserService, $state) {
  
  let vm = this;

  vm.login =login;

  function login(userObj){
    if(userObj){
      UserService.login(userObj).then((res)=>{
        console.log(res.data.sessionToken);
        $state.go('root.dashboard'); //HAS TO GO TO DASHBOARD
      }).catch(()=>{
        alert('Invalid User Name or Password');
      });
    } else{
      alert('Cannot be blank!');
    }
    
  }
};

LoginController.$inject = ['UserService','$state'];

export default LoginController;