let SearchService = function(PARSE, $http) {
  
  let eventURL = PARSE.URL + 'classes/events';

  this.search = search;
  this.specific = specific;
  this.getTagData = getTagData;
  this.getGoData = getGoData;
  this.geteventData = geteventData;
  this.getspecData = getspecData;
  this.singleResult = singleResult;


  function search (objectId) {
    return $http.get(eventURL, PARSE.CONFIG);
  }

  function getspecData(spec){
    //console.log('im here in the service, spec', spec);
    return $http({
      url : eventURL,
      method : 'GET',
      params : {where : {tags : spec }} ,
      headers: PARSE.CONFIG.headers
    });
  }

  function specific(data){
    // console.log('from the specific function on service',data);
    return $http({
      url: eventURL, 
      method : "GET",
      params : { where:  data },
      headers: PARSE.CONFIG.headers
    });
  }

  function getTagData(){
    //console.log('hello from tag');
    return $http({
      url : eventURL,
      method : 'GET',
      headers : PARSE.CONFIG.headers
    });
  }

  function getGoData(){
    //console.log('hello from go');
    return $http({
      url : eventURL,
      method : 'GET',
      headers : PARSE.CONFIG.headers
    });
  }

  function singleResult(id) {
    console.log('singleResult id ', id);
    return $http({
      url: eventURL,
      method: 'GET',
      params : {where : {name : id}},
      headers: PARSE.CONFIG.headers
    });
  }

  function geteventData(){
    //console.log('hello from event data');
    return $http({
      url : eventURL,
      method : 'GET',
      headers : PARSE.CONFIG.headers
    });
  }

};

SearchService.$inject = ['PARSE', '$http'];

export default SearchService;


