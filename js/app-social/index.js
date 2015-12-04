import angular from 'angular';

//Controllers
import SearchController from './controllers/search.controller';

//Services
import SearchService from './services/search.service';

angular
  .module('app.social', ['app.core'])
  .controller('SearchController', SearchController)
  .service('SearchService', SearchService)
  // .directive('SearchResult', SearchResult)
;