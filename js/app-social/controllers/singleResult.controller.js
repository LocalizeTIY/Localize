let SingleResultController = function(SearchService, $stateParams) {
  
  let vm = this;
  let single = $stateParams.id;
  console.log(single);
  vm.singleResult = singleResult;
  vm.singleResult(single);

  function singleResult(single) {
    SearchService.singleResult(single).then((res)=>{
      vm.singles = res.data.results;
      console.log('res', res);
    });
  }



};

SingleResultController.$inject = ['SearchService', '$stateParams'];

export default SingleResultController;