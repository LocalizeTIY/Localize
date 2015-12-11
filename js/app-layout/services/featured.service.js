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
};


FeaturedService.$inject = ['PARSE', '$http'];
export default featuredService;