import angular from 'angular';

//Controllers
import HomeController from './controllers/home.controller';
// import LoginController from './controllers/login.controller';
import AddController from './controllers/add.controller';

//service
import LocalizeService from './services/localize.service';

angular 
  .module('app.layout', ['app.social'])
  .controller('HomeController', HomeController)
  .controller('AddController', AddController)
  .service('LocalizeService',LocalizeService)
;