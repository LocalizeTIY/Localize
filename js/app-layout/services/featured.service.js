let FeaturedService = function (PARSE, $http) {

  let eventURL = PARSE.URL + 'classes/events';

  // this.search = search;
  this.getAllEvents = getAllEvents;
  this.getNameData = getNameData;
  this.getTagData = getTagData;
  this.getRatingsData = getRatingsData;
  this.getEvent = getEvent;
  // this.getDateData = getDateData;
  // this.getCategoryData = getCategoryData;
  // this.getNameData = getNameData;
  // this.getTimeData = getTimeData;

  function Events (eventObj){
  	console.log('eventObjs?', eventObj);
    return $http({
        url: eventURL,
        method: 'GET',
        headers : PARSE.CONFIG.headers
      });

      
    	// this.date = eventObj.date;
  }

  function getAllEvents(){
    	return $http({
        url: eventURL,
        method: 'GET',
        headers: PARSE.CONFIG.headers
      });
  }


  // function search (objectId) {
  // 	return $http.get(eventURL, PARSE.CONFIG);
  // }

  function getEvent (id) {
    	return $http.get('url' + '/' + id, PARSE.CONFIG);

  }

  function getTagData(){
    	console.log('working?');
    	return $http({
      		url : eventURL,
      		method : 'GET',
      		headers : PARSE.CONFIG.headers
    	});
  }

  function getRatingsData(){
    	console.log('ratings?');
    	return $http({
      		url : eventURL,
      		method : 'GET',
      		headers : PARSE.CONFIG.headers
    	});
  }

  function getDateData(){
    	console.log('date?');
    	return $http({
      		url : eventURL,
      		method : 'GET',
      		headers : PARSE.CONFIG.headers
    	});
  }

  function getNameData(){
    console.log('name?');
    return $http({
      url : eventURL,
      method : 'GET',
      headers : PARSE.CONFIG.headers
    });
  }

};


FeaturedService.$inject = ['PARSE', '$http'];
export default FeaturedService;