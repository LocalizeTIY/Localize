let TagResultsController = function(SearchService, $stateParams, $scope) {
  
  let vm = this;
  vm.name = 'dsdsds';
  vm.getspecData = getspecData;

  // console.log($stateParams.type);
  vm.spec = $stateParams.type;
  //console.log(vm.spec);


  function getspecData(spec) {
    console.log('shalmali', spec);
    SearchService.getspecData(spec).then((res)=>{
      vm.info = res.data.results; 
      console.log(res);
    });
  }

  getspecData(vm.spec);

};

TagResultsController.$inject = ['SearchService', '$stateParams', '$scope'];

export default TagResultsController;