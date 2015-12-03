import angular from 'angular';

//Import jQuery & Foundation
import $ from 'jquery';
import 'foundation';
import 'angular-foundation';

//Starting up foundation
$(document).foundation();

//IMPORTING OUR SUB-MODULES
import './app-core/index';
import './app-layout/index';
import './app-user/index';
import './app-social/index';
import './app-dashboard/index';

angular
  .module('app', ['app.core', 'app.layout', 'app.user', 'app.social', 'app.dashboard','mm.foundation'])
  .run( function ($rootScope) {
    // $viewContentLoaded comes from Ui Router
    $rootScope.$on('$viewContentLoaded', function (event, data) {
      $(document).foundation();
    });
  })
;
