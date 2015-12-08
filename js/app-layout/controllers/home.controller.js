let HomeController = function(SearchService) {
  
  let vm = this;
 
  vm.search = search;
  vm.results = [];

  function search (data) {
    SearchService.search(data).then( (res) => {
      vm.results = res.data.results;
    });
  } 

  let video = document.getElementById('bgvideo');
  video.playbackRate = 0.8;

};

HomeController.$inject = ['SearchService'];

export default HomeController;