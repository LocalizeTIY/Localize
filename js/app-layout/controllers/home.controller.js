import _ from 'underscore';
let HomeController = function(SearchService) {
  
  let vm = this;
 
  vm.search       = search;
  vm.results      = [];
  vm.getGoData    = getGoData;
  vm.geteventData = geteventData;
  vm.getTagData   = getTagData;
  vm.uniqueTags   = uniqueTags;
  vm.uniqueTag    = [];


  function search (data) {
    SearchService.search(data).then( (res) => {
      vm.results = res.data.results;
    });
  } 


  let video = document.getElementById('bgvideo');
  video.playbackRate = 0.8;

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
      let items = res.data.results;
      let eatList = items.filter(item => item.category === 'eat');
      vm.tags = uniqueTags(eatList);
      
      // let pluckedTags = _.pluck(res.data.results, 'tags');
      // console.log('plucked', pluckedTags);
      // console.log('uniqed', vm.tags);
      // window.jdtemp = res.data.results;
    });
  }


  getTagData();

  function getGoData(){
    SearchService.getGoData().then((res)=>{
      vm.go=[];
      let items = res.data.results;
      let goList = items.filter(item => item.category === 'go');
      vm.go = uniqueTags(goList);
      // let pluckedGo = _.pluck(goList, 'tags');
      //console.log('go names', vm.go);
    });
  }
  getGoData();

  function geteventData(){
    SearchService.geteventData().then((res)=>{
      vm.events=[];
      let items = res.data.results;
      let eventsList =items.filter(item=> item.category ==='event');
      vm.events= uniqueTags(eventsList);
      //console.log('event names', vm.events);
    });
  }

  function uniqueTags (items) {
    let itemsByCategory = _.groupBy(items, 'category');
    console.log('itemsByCategory', itemsByCategory );
    let uniqueTag = [];
    _.each(itemsByCategory, (items, category) => {
      uniqueTag = _.uniq(_.pluck(items, 'tags'));
    });
    return uniqueTag;
  }

  geteventData();
};





HomeController.$inject = ['SearchService'];

export default HomeController;