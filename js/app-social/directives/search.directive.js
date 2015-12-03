let searchResult = function(SearchService) {
  
  return {
    restrict: 'E',
    scope: {
      result: '='
    },
    template: `
    <div>
      <form ng-submit='{{result.name}}'>
        <input placeholder='Search by Name' ng-model='data'>
        <button>Go</button>
      </form>
    </div>
    `,
    controller: 'SearchController as vm'
  };

};

searchResult.$inject = ['SearchService'];

export default searchResult;