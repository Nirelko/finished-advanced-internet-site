import angular from 'angular';

const CONTROLLER = 'loginController';

angular.module('advanced.controllers')
  .controller(CONTROLLER, ($scope, $state, $mdDialog, User, LoggedUser) => {
    $scope.user = {};

    $scope.login = () => {
      return User.login($scope.user).$promise
        .then(result => {
          LoggedUser.login(result);
          $state.transitionTo('shell.main', {}, { location: 'replace' });
        })
        .catch(() => {
          return $mdDialog.show($mdDialog.alert({
            title: 'Login Failed',
            textContent: 'Login Failed! try again',
            ok: 'Close'
          }));
        });
    };
  });

export default CONTROLLER;