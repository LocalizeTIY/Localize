let DashboardService = function (PARSE, $http) {

  let eventURL = PARSE.URL + 'classes/events';

  this.getAllEvents = getAllEvents;

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
};

DashboardService.$inject = ['PARSE', '$http'];

export default DashboardService;