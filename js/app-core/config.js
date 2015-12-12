let config = function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/app-layout/layout.tpl.html'
    })

    .state('root.home', {
      url: '/',
      controller: 'HomeController as vm',
      templateUrl: 'templates/app-layout/home.tpl.html'
    })

    .state('root.register', {
      url: '/register',
      controller: 'RegisterController as vm',
      templateUrl: 'templates/app-user/register.tpl.html'
    })

    .state('root.login',{
      url:'/login',
      controller:'LoginController as vm',
      templateUrl:'templates/app-user/login.tpl.html'
    })

    .state('root.add',{
      url:'/add',
      controller:'AddController as vm',
      templateUrl : 'templates/app-layout/add.tpl.html'
    })

    .state('root.dashboard', {
      url: '/dashboard',
      controller: 'DashboardController as vm',
      templateUrl: 'templates/app-dashboard/dashboard.tpl.html'
    })
    
    .state('root.options',{
      url:'/options',
      controller:'OptionsController as vm',
      templateUrl : 'templates/app-layout/options.tpl.html'
    })

    .state('root.featured',{
      url:'/featured',
      controller:'FeaturedController as vm',
      templateUrl : 'templates/app-layout/featured.tpl.html'
    })

    .state('root.tagresults', {
      url: '/tag/:type',
      controller: 'TagResultsController as vm',
      templateUrl: 'templates/app-social/tagresults.tpl.html'
    })

    .state('root.singleresult', {
      url: '/singleresult/:id',
      controller: 'SingleResultController as vm',
      templateUrl: 'templates/app-social/singleResult.tpl.html'
    })

    .state('root.list', {
      url : '/tag/type/:list',
      controller :'TagsListController as vm',
      templateUrl:'templates/app-social/tagslist.tpl.html'
    })

    .state('root.singlefeature', {
      url : '/singlefeature/:id',
      controller : 'SingleFeatureController as vm',
      templateUrl : 'templates/app-layout/singleFeature.tpl.html'
    });


  

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;