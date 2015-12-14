let DashboardService = function (PARSE, $http, UserService, $state, $cookies, LocalizeService) {

  let eventURL = PARSE.URL + 'classes/events';

  this.getAllEvents = getAllEvents;
  this.logout= logout;
  this.addRating = addRating;
  // this.Events= Events;


  function getAllEvents(user){
   	return $http({
  		url : eventURL,
  		method : 'GET',
  		params : {where :{createdby : user.userName}},
  		headers : PARSE.CONFIG.headers
  	});
  }

// USER CAN ADD RATING TO THEIR OWN EVENTS

  function addRating(eventObj, e){
    console.log('from service eventObj is new rating and e is objectId',eventObj, e );
    return $http ({
      url : eventURL,
      method : 'PUT',
      ratings : eventObj,
      params : {where :{objectId : e }},
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

DashboardService.$inject = ['PARSE', '$http', 'UserService','$state', '$cookies', 'LocalizeService'];

export default DashboardService;