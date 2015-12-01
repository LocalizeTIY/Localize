import angular from 'angular';

//Controllers
import HomeController from './controllers/home.controller';
import LoginController from './controllers/login.controller';
import AddController from './controllers/add.controller';
import RegisterController from './controllers/register.controller';

angular 
  .module('app.layout', [])
  .controller('HomeController', HomeController)
  .controller('LoginController', LoginController)
  .controller('AddController', AddController)
  .controller('RegisterController', RegisterController)
;