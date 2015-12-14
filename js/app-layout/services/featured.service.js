let featuredService = function (PARSE, $http) {

  let url = PARSE.URL + 'classes/events';

  this.getAllEvents = getAllEvents;
  this.getEvent = getEvent;
  this.getName = getName;
  this.getTime = getTime;
  this.getDate = getDate;
  this.getLocation = getLocation;
  this.getRatings = getRatings;
  this.getTags = getTags;
  this.getPicture = getPicture;
  this.getComment = getComment;
  this.getCategory = getCategory;


  function Event (EventObj) {
    this.name = EventObj.name;
    this.time = EventObj.time;
    this.date = EventObj.date;
    this.location = EventObj.location;
    this.ratings = EventObj.ratings;
    this.tags = EventObj.tags;
    this.picture = EventObj.picture;
    this.comment = EventObj.comment;
    this.category = EventObj.category;
  }

  function getAllEvents () {
    return $http.get(url, PARSE.CONFIG);
  }

  function getEvent (id) {
    return $http.get(url + '/' + id, PARSE.CONFIG);
  }

  function getName (id) {
    return $http.get(url + '/' + id, PARSE.CONFIG);
  }

  function getRatings (id) {
    return $http.get(url + '/' + id, PARSE.CONFIG);
  }
let FeaturedService = function (PARSE, $http) {

  let eventURL = PARSE.URL + 'classes/events';

  // this.search = search;
  this.getAllEvents = getAllEvents;
  // this.getNameData = getNameData;
  // this.getTagData = getTagData;
  // this.getRatingsData = getRatingsData;
  // this.getEventData = getEventData;
  // this.getLocationData = getLocationData;
  // this.getTimeData = getTimeData;
  // this.getDateData = getDateData;
  // this.getCategoryData = getCategoryData;
  // this.getNameData = getNameData;
  // this.getTimeData = getTimeData;

  // function Events (eventObj){
  // 	console.log('eventObjs?', eventObj);
  //   return $http({
  //       url: eventURL,
  //       method: 'GET',
  //       headers : PARSE.CONFIG.headers
  //     });
  // }
      
    	// this.date = eventObj.date;
  

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

  // function getEvent(id) {
  //   	console.log('singleEvent?', id);
  //     return $http({
  //     url : eventURL,
  //     method : 'GET',
  //     headers : PARSE.CONFIG.headers
  //     });

  // }

  // function getTagData(){
  //   	console.log('working?');
  //   	return $http({
  //     		url : eventURL,
  //     		method : 'GET',
  //     		headers : PARSE.CONFIG.headers
  //   	});
  // }

  // function getRatingsData(){
  //   	console.log('ratings?');
  //   	return $http({
  //     		url : eventURL,
  //     		method : 'GET',
  //     		headers : PARSE.CONFIG.headers
  //   	});
  // }

  // function getDateData(){
  //   	console.log('date?');
  //   	return $http({
  //     		url : eventURL,
  //     		method : 'GET',
  //     		headers : PARSE.CONFIG.headers
  //   	});
  // }

  // function getNameData(){
  //   console.log('name?');
  //   return $http({
  //     url : eventURL,
  //     method : 'GET',
  //     headers : PARSE.CONFIG.headers
  //   });
  // }

  // function getLocationData(){
  //   console.log('location?');
  //   return $http({
  //     url : eventURL,
  //     method : 'GET',
  //     headers : PARSE.CONFIG.headers
  //   });
  // }

  // function getTimeData(){
  //   console.log('time?');
  //   return $http({
  //     url : eventURL,
  //     method : 'GET',
  //     headers : PARSE.CONFIG.headers
  //   });
  // }

  // this.showMyFeatures = function(eventObj) {
  //   return $http({
  //     method : 'GET',
  //     url : url + 'events/'
  //   })
  // }
>>>>>>> master
};


FeaturedService.$inject = ['PARSE', '$http'];
<<<<<<< HEAD
export default featuredService;
=======
export default FeaturedService;
>>>>>>> master
