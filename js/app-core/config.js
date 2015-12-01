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
      templateUrl: 'templates/app-layout/register.tpl.html'
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
    });
  

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;