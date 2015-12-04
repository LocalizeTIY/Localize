let LocalizeService = function(PARSE, $http, $state, $cookies, UserService) {
  
  let url = PARSE.URL + 'classes/events';

  this.addEvent = addEvent;
  

  // function Event(eventObj){
  //   this.location = eventObj.location;  
  //   this.name     = eventObj.name;
  //   this.date     = eventObj.date;
  //   this.time     = eventObj.time;
  //   this.permanent= eventObj.permanent;
  //   this.comment  = eventObj.comment;
  //   this.tags     = eventObj.tags;
  //   this.rating   = (!eventObj.rating)? 'No Rating' : eventObj.rating ; 
  // }

  function addEvent(eventObj, user){
    // let newEvent = new Event(eventObj);

    console.log(eventObj);

    let newEventObject = Object.assign({}, {
      ratings: 'No Rating',
      createdby: user.userName,
      user: {
        __type: 'Pointer',
        className: '_User',
        objectId: user.userObjID
      }
    }, eventObj);

    return $http.post(url, newEventObject, PARSE.CONFIG);
  }

};

LocalizeService.$inject = ['PARSE', '$http', '$state', '$cookies','UserService'];

export default LocalizeService;