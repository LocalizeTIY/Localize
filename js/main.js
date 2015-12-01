import angular from 'angular';

//Import jQuery & Foundation
import 'foundation';
import $ from 'jquery';

//Starting up foundation
$(document).foundation();

import './app-core/index';
import './app-layout/index';

angular
  .module('app', ['app.core', 'app.layout'])
  .run(function ($rootScope) {
    //$viewContentLoaded comes from Ui Router
    $rootScope.on('$viewContentLoaded', function (event, data) {
      $(document).foundation();
    });
  })
;
