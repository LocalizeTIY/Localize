import angular from 'angular';

//Controllers
import HomeController from './controllers/home.controller';

angular 
  .module('app.layout', [])
  .controller('HomeController', HomeController)
;