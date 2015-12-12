let DashboardService = function (PARSE, $http, UserService, $state, $cookies) {

  let eventURL = PARSE.URL + 'classes/events';

  this.getAllEvents = getAllEvents;
  this.logout= logout;
  this.Events= Events;


  function getAllEvents(){
  	return $http({
  		url : eventURL,
  		method : 'GET',
  		headers : PARSE.CONFIG.headers
  	});
  }

  function Events (eventObj){
  	console.log('eventObjs?', eventObj);
  	return $http({
  		url : eventURL,
  		method : 'GET',
  		headers : PARSE.CONFIG.headers
  	});
  }

  function logout(userObj) {
  	console.log('from logout in service',userObj.sessionToken);
		$cookies.remove(userObj.sessionToken);
		return $http({
			url     : PARSE.URL + 'logout',
  	 	headers : PARSE.CONFIG.headers,
  	 	method  :'POST'
  	});
  }
  
};

DashboardService.$inject = ['PARSE', '$http', 'UserService','$state', '$cookies'];

export default DashboardService;