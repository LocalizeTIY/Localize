let FeaturedController = function(FeaturedService) {

  let vm = this;
  vm.events = [];
  vm.clicked = clicked;

  activate();

  function activate() {
    FeaturedService.getAllEvents().then((res)=>{
      vm.events = res.data.results;
      console.log('featuredController?');
      console.log(vm.events);
    });
  }

  function clicked (event){
    console.log('clicked', event.name);
  }

  function events(eventObj){
    FeaturedService.events(data).then((res)=>{
      // vm.events = res.data.results;
      console.log(res);
    });
  }  
};

FeaturedController.$inject = ['FeaturedService'];

export default FeaturedController;