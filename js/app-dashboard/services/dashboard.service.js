let DashboardService = function (PARSE, $http, UserService, $state, $cookies) {

  let eventURL = PARSE.URL + 'classes/events';

  this.getAllEvents = getAllEvents;
  this.logout= logout;
  // this.Events= Events;


  function getAllEvents(user){
   	return $http({
  		url : eventURL,
  		method : 'GET',
  		params : {where :{createdby : user.userName}},
  		headers : PARSE.CONFIG.headers
  	});
  }


  // function Events (eventObj,user){
  // 	console.log('eventObjs?', eventObj);
  // 	console.log('user', user.userName);
  // 	return $http({
  // 		url : eventURL,
  // 		method : 'GET',
  // 		params : {where :{createdby : user.userName}},
  // 		headers : PARSE.CONFIG.headers
  // 	});
  // }



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