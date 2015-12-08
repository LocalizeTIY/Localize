import angular from 'angular';

//Controllers
import SearchController from './controllers/search.controller';
import SpecificSearchController from './controllers/specificSearch.controller';

//Services
import SearchService from './services/search.service';

angular
  .module('app.social', ['app.core'])
  .controller('SearchController', SearchController)
  .controller('SpecificSearchController', SpecificSearchController)
  .service('SearchService', SearchService)
  // .directive('SearchResult', SearchResult)
;