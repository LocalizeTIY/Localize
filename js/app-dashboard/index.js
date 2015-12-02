import angular from 'angular';

//Controllers

import DashboardController from './controllers/dashboard.controller';

angular 
  .module('app.dashboard', [])
  .controller('DashboardController', DashboardController)
;