let UserService = function(PARSE, $http, $cookies, $state) {
  
  this.signup = signup;

  function signup (userObj) {
    return $http.post(PARSE.URL + 'users', userObj, PARSE.CONFIG);
  }

};

UserService.$inject = ['PARSE', '$http', '$cookies', '$state'];

export default UserService;