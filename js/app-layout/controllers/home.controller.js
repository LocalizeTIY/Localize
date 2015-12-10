import _ from 'underscore';
let HomeController = function(SearchService) {
  
  let vm = this;
 
  vm.search = search;
  vm.results = [];
  vm.getGoData = getGoData;
  vm.getEventData = getEventData;
  vm.getTagData = getTagData;

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
      let eatList = items.filter(item => item.tags === 'eat');
      vm.tags = _.pluck(eatList, 'name');
      console.log('eat names', vm.tags);
      // let pluckedTags = _.pluck(res.data.results, 'tags');
      // console.log('plucked', pluckedTags);
      // vm.tags = _.uniq(pluckedTags);
      // console.log('uniqed', vm.tags);
      // window.jdtemp = res.data.results;
    });
  }
  getTagData();

  function getGoData(){
    SearchService.getGoData().then((res)=>{
      vm.go=[];
      let items = res.data.results;
      let goList = items.filter(item => item.tags === 'go');
      vm.go = _.pluck(goList, 'name');
      console.log('go names', vm.go);
    });
  }
  getGoData();

  function getEventData(){
    SearchService.getEventData.then((res)=>{
      vm.event =[];
      let items = res.data.results;
      let eventList = items.filter(item => item.tags === 'event');
      vm.event = _.pluck(eventList, 'name');
      console.log('event names', vm.event);

    });
  }
  getEventData();
};





HomeController.$inject = ['SearchService'];

export default HomeController;