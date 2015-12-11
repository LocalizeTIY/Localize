import angular from 'angular';

//Controllers
import SearchController from './controllers/search.controller';
import SpecificSearchController from './controllers/specificSearch.controller';
import TagResultsController from './controllers/tagresults.controller';
import TagsListController from './controllers/tagslist.controller';
//Services
import SearchService from './services/search.service';

angular
  .module('app.social', ['app.core'])
  .controller('SearchController', SearchController)
  .controller('SpecificSearchController', SpecificSearchController)
  .controller('TagResultsController', TagResultsController)
  .controller('TagsListController', TagsListController)
  .service('SearchService', SearchService)
  // .directive('SearchResult', SearchResult)
;