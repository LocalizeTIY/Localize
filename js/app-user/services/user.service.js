let UserService = function(PARSE, $http, $cookies, $state) {

  let regURL = PARSE.URL + 'users';
  
  this.signup = signup;

  function User (userObj) {
    this.username = userObj.username;
    this.password = userObj.password;
  }

  function signup (userObj) {
    let person = new User (userObj);
    return $http.post(regURL, userObj, PARSE.CONFIG);
  }

};

UserService.$inject = ['PARSE', '$http', '$cookies', '$state'];

export default UserService;