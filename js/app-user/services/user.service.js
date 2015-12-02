let UserService = function(PARSE, $http, $cookies, $state) {

  let regURL = PARSE.URL + 'users';
  
  let loginUrl = PARSE.URL +'login';


  this.signup     = signup;
  this.login      = login;
  this.storeAuth  = storeAuth;
  this.checkAuth  = checkAuth;
  this.setHeaders = setHeaders;

  function login(userObj){
    return $http.get(PARSE.URL +'login',{
      headers  : PARSE.CONFIG.headers,
      params   : userObj 
    });
  }

  function setHeaders (token) {
    PARSE.CONFIG.headers['X-Parse-Session-Token'] = token;
  }

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