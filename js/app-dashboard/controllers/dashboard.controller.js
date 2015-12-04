let DashboardController = function ($scope, $cookies, UserService ) {

  let vm = this;
  $scope.user = UserService.getUserInfo();

  

};

DashboardController.$inject = ['$scope', '$cookies', 'UserService'];

export default DashboardController;