import _ from 'underscore';
let HomeController = function(SearchService) {
  
  let vm = this;
 
  vm.search = search;
  vm.getGoData = getGoData;
  vm.results = [];
  vm.getTagData = getTagData;

  function search (data) {
    SearchService.search(data).then( (res) => {
      vm.results = res.data.results;
    });
  } 

  // function specific(data){
  //   SearchService.specific(data).then((res)=>{
  //     vm.results =res.data.results;
  //     console.log(res);
  //     //console.log(vm.results);
  //   });
  // }

  function getTagData(){

    SearchService.getTagData().then((res)=>{
      vm.tags=[];
      console.log(res.data.results);
      let pluckedTags = _.pluck(res.data.results, 'tags');
      console.log('plucked', pluckedTags);
      vm.tags = _.uniq(pluckedTags);
      console.log('uniqed', vm.tags);
    });
  }
  getTagData();
};

function getGoData(){
  SearchService.getGoData().then((res)=>{
    vm.go=[];
    let pluckedGo = _.pluck(res.data.results, 'name');
    console.log('plucked', pluckedGo);
    vm.go = _.uniq(pluckedGo);
    console.log('uniqed', vm.go);

  });
}

HomeController.$inject = ['SearchService'];

export default HomeController;