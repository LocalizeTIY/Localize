let FeaturedController = function(FeaturedService) {

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

FeaturedController.$inject = ['FeaturedService'];

export default FeaturedController;