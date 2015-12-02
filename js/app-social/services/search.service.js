let SearchService = function(PARSE, $http, $cookies, $state) {
  
  let eventURL = PARSE.URL + 'events';

  this.search = search;

  function search (name) {
    return $http.get(eventURL, PARSE.CONFIG);
  }

};

SearchService.$inject = ['PARSE', '$http', '$cookies', '$state'];

export default SearchService;