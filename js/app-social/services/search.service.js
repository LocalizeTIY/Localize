let SearchService = function(PARSE, $http) {
  
  let eventURL = PARSE.URL + 'classes/events';

  this.search = search;
  this.specific = specific;
  this.getTagData = getTagData;
  this.getGoData = getGoData;

  function search (objectId) {
    return $http.get(eventURL, PARSE.CONFIG);
  }

  function specific(data){
    console.log('from the specific function on service',data);
    return $http({
      url: eventURL, 
      method : "GET",
      params : { where:  data },
      headers: PARSE.CONFIG.headers
    });
  }

  function getTagData(){
    console.log('hello');
    return $http({
      url : eventURL,
      method : 'GET',
      headers : PARSE.CONFIG.headers
    });
  }

  function getGoData(){
    console.log('hello');
    return $http({
      url : eventURL,
      method : 'GET',
      headers : PARSE.CONFIG.headers
    });
  }

};

SearchService.$inject = ['PARSE', '$http'];

export default SearchService;

// 'where={"location":{"$regex":".*tiy.*", "$options":"i"}}' \
