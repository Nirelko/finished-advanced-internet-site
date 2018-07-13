import angular from 'angular';

const CONTROLLER = 'registerController';

angular.module('advanced.controllers')
  .controller(CONTROLLER, ($scope, $mdDialog, $state, User) => {
    $scope.register = () => User.save($scope.user).$promise
      .then(() => {
        $state.transitionTo('shell.login', {}, { location: 'replace' });
      })
      .catch(() => {
        return $mdDialog.show($mdDialog.alert({
          title: 'Register Failed',
          textContent: 'Register Failed! try again',
          ok: 'Close'
        }));
      });
  });

export default CONTROLLER;