let SearchService = function(PARSE, $http) {
  
  let eventURL = PARSE.URL + 'classes/events';

  this.search = search;

  function search (objectId) {
    return $http.get(eventURL, PARSE.CONFIG);
  }

};

SearchService.$inject = ['PARSE', '$http'];

export default SearchService;


