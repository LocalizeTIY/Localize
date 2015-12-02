import angular from 'angular';

//Controllers

import DashboardController from './controllers/dashboard.controller';
import DashboardService from './services/dashboard.service';


angular 
  .module('app.dashboard', ['app.core'])
  .controller('DashboardController', DashboardController)

  .service('DashboardService', DashboardService)
;