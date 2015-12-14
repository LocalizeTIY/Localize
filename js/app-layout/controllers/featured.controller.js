let FeaturedController = function(FeaturedService, $scope, $http, LocalizeService, UploadService, $cookies) {

  let vm = this;
  vm.events = [];
  vm.clicked = clicked;


  activate();

  function activate () {
    FeaturedService.getAllEvents().then((res)=>{
      vm.events = res.data.results;
    });
  }

  // function clicked (event) {
  // 	console.log.('clicked', event.category);
  // }
  // this.

  // let res = array;

  activate();

  function activate() {
    FeaturedService.getAllEvents().then((res)=>{
      vm.events = res.data.results;
      console.log('featuredController?');
      console.log(vm.events);
    });
// --------LIMIT DISPLAY-------
  // function categoryLimit($scope, $http) {
  //   $http.get('event/event.json').success(function(data){
  //     $scope.event = data.splice(0, 'quantity');
  //   });

  //   $scope.orderProp = 'category';
  //   $scope.quantity = 3;
  // }

  // --------------END OF LIMIT DISPLAY-----------
  }
  
  // function shuffleArray(vm.events){
  //   for
  // }
  function clicked (event){
    console.log('clicked', event.name);
  }

  function events(eventObj){
    FeaturedService.events(data).then((res)=>{
      // vm.events = res.data.results;
      console.log(res);
    });
  }


// -----------STARS-------------
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
  // --------------END OF STARS------------


// ------------STARS ATTEMPT 2------------
  // let starApp = angular.module('starApp', []);

  // starApp.controller('StarCtrl', ['$scope', function($scope) {

  // }])

// ------------END OF STARS ATTEMPT 2-----------------

//--------------STARS ATTEMPT 3-------------------
  // $(function(){
  //   $('span.stars').stars();
  // });

//--------------STARS ATTEMPT 3-------------------

  // ------RANDOMIZE RESULTS--------
  // let categories = [
  //   {'category' : 'go'},
  //   {'category' : 'event'},
  //   {'category' : 'eat'}
  // ];

  // _.find(categories, _.matchesProperty('category', 'go'));
  // console.log(_.matchesProperty);
  // let categoryArr = [(
  //   "category" : "go",
  //   ""
  //   )]
    // ------END OF RANDOMIZE--------

  // function shuffleArray(array) {
  //   for (var i = array.length - 1; i > 0; i--) {
  //       var j = Math.floor(Math.random() * (i + 1));
  //       var temp = array[i];
  //       array[i] = array[j];
  //       array[j] = temp;
  //   }
  //   return array;
  // }  

};

FeaturedController.$inject = ['FeaturedService', '$scope','$http', 'LocalizeService', 'UploadService', '$cookies'];

export default FeaturedController;