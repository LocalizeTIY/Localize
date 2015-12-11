let SingleResultController = function(SearchService, $stateParams) {
  
  let vm = this;

  vm.singleResult = singleResult;

  console.log('hi');

  function singleResult () {
    console.log('here it is');

  }


};

SingleResultController.$inject = ['SearchService', '$stateParams'];

export default SingleResultController;