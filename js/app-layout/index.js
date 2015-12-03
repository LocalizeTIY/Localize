import angular from 'angular';

//Controllers
import HomeController from './controllers/home.controller';
// import LoginController from './controllers/login.controller';
import AddController from './controllers/add.controller';
import OptionsController from './controllers/options.controller';
import FeaturedController from './controllers/featured.controller';



angular 
  .module('app.layout', [])
  .controller('HomeController', HomeController)
  .controller('AddController', AddController)
  .controller('OptionsController', OptionsController)
  .controller('FeaturedController', FeaturedController)
 
;