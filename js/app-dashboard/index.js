import angular from 'angular';

//Controllers

import DashboardController from './controllers/dashboard.controller';

angular 
  .module('app.dashboardLayout', [])
  .controller('DashboardController', DashboardController)
;