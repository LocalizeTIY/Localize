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

};

FeaturedController.$inject = ['FeaturedService'];

export default FeaturedController;