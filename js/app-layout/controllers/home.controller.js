import _ from 'underscore';
let HomeController = function($scope, $cookies, $http, SearchService, FeaturedService, LocalizeService, UploadService) {
  
  let vm = this;
 
  vm.search       = search;
  vm.results      = [];
  vm.getGoData    = getGoData;
  vm.geteventData = geteventData;
  vm.getTagData   = getTagData;
  vm.uniqueTags   = uniqueTags;
  vm.uniqueTag    = [];
  vm.clicked      = clicked;
  vm.events       = [];
  


  function search (data) {
    SearchService.search(data).then( (res) => {
      vm.results = res.data.results;
    });
  } 


  let video = document.getElementById('bgvideo');
  video.playbackRate = 0.8;


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
  };

  geteventData();


// ///////////// FEATURED SECTION //////////////

activate();

  function activate() {
    FeaturedService.getAllEvents().then((res)=>{
      vm.eventRes = res.data.results;
      console.log('featuredController?');
      console.log(vm.events);
    });
  }

  function clicked (event){
    console.log('clicked', event.name);
  }

  function events (eventObj){
    FeaturedService.events(data).then((res)=>{
      // vm.events = res.data.results;
      console.log(res);
    });
  }


//////////// BEGINNING OF STARS ////////////

  $scope.rate = 5;
  $scope.max = 10;
  $scope.isReadonly = false;

  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
  };

  $scope.ratingStates = [
    {stateOn: 'fa-check-circle', stateOff: 'fa-check-circle-o'},
    {stateOn: 'fa-star', stateOff: 'fa-start-o'},
    {stateOn: 'fa-heart', stateOff: 'fa-ban'},
    {stateOn: 'fa-heart'},
    {stateOff: 'fa-power-off'}
  ];

//////////// END OF STARS //////////////

};


HomeController.$inject = ['$scope', '$cookies', '$http', 'SearchService', 'FeaturedService', 'LocalizeService', 'UploadService'];

export default HomeController;