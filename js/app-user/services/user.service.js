let UserService = function(PARSE, $http, $cookies, $state) {

  let regURL = PARSE.URL + 'users';
  
  let loginUrl = PARSE.URL +'login';


  this.signup     = signup;
  this.login      = login;
  this.storeAuth  = storeAuth;
  this.getUserInfo = getUserInfo;
  //this.checkAuth  = checkAuth;
  //this.setHeaders = setHeaders;




  function getUserInfo(){
    return {
      sessionToken: $cookies.get('userSessionToken'),
      userObjID: $cookies.get('userObjID'),
      userName: $cookies.get('userName')
    };
  }

  function login(userObj){
    return $http.get(PARSE.URL +'login',{
      headers  : PARSE.CONFIG.headers,
      params   : userObj 
    });
  }

  function storeAuth(user){
    $cookies.put('userSessionToken', user.sessionToken);
    $cookies.put('userObjID', user.objectId);
    $cookies.put('userName', user.username);
    console.log(user.username);
    //setHeaders(user.sessionToken);
    //$state.go('root.home'); // THIS HAS TO GO TO DASHBOARD.
  }

  // function checkAuth(){
  //   let token = $cookies.get('sessionToken');
  //   PARSE.CONFIG.headers['X-Parse-Session-Token'] =token;
  // }

  // function setHeaders (token) {
  //   PARSE.CONFIG.headers['X-Parse-Session-Token'] = token;
  // }


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