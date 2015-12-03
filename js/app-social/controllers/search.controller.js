let SearchController = function(SearchService) {
  
  let vm = this;

  vm.search = search;
  vm.results = [];

  function search (data) {
    console.log('here');
    SearchService.search(data).then( (res) => {
      console.log(res);
    });
  }

};

SearchController.$inject = ['SearchService'];

export default SearchController;