let DashboardService = function (PARSE, $http, UserService, $state, $cookies, LocalizeService) {

  let eventURL = PARSE.URL + 'classes/events';

  this.getAllEvents = getAllEvents;
  this.logout= logout;
  this.addRating = addRating;
  // this.Events= Events;


  function getAllEvents(user){
    console.log('user',user);
    if(!user.sessionToken){
      swal('not logged in !!');
      $state.go('root.home')
    }else{
     	return $http({
    		url : eventURL,
    		method : 'GET',
    		params : {where :{createdby : user.userName}},
    		headers : PARSE.CONFIG.headers
    	});
    }
  }

// USER CAN ADD RATING TO THEIR OWN EVENTS

  function addRating(newrating, objId){
    console.log('from service newrating ' + newrating + 'and  objId'+ objId );
    return $http ({
      // url     : `${eventURL}/${objId}`,
      url : eventURL+'/'+objId,
      method  : 'PUT',
      data:{ratings : newrating},
      headers : PARSE.CONFIG.headers
    });
  }

  function logout(userObj) {
  	//console.log('from logout in service',userObj.sessionToken);
    var temp = $cookies.get('userSessionToken','userName','userObjID');
    console.log('temp', temp);
		$cookies.remove('userSessionToken');
    $cookies.remove('userName');
    $cookies.remove('userObjID');
    $state.go('root.home');;
    
    // return $http({
    //  url     : PARSE.URL + 'logout',
  //    headers : PARSE.CONFIG.headers,
  //    method  :'POST'
  //  });
  }
  
};

DashboardService.$inject = ['PARSE', '$http', 'UserService','$state', '$cookies', 'LocalizeService'];

export default DashboardService;