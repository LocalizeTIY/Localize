import angular from 'angular';

//Controllers
import HomeController from './controllers/home.controller';
// import LoginController from './controllers/login.controller';
import AddController from './controllers/add.controller';

angular 
  .module('app.layout', [])
  .controller('HomeController', HomeController)
  // .controller('LoginController', LoginController)
  .controller('AddController', AddController)
;