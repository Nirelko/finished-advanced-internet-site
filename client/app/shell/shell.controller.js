import angular from 'angular';

import logo from './logo2.jpg';

const CONTROLLER = 'shellController';

angular.module('advanced.controllers')
  .controller(CONTROLLER, ($scope, $state, LoggedUser) => {
    $scope.logout = () => {
      LoggedUser.logout();
      $state.transitionTo('shell.login', {}, { location: 'replace' });
    };


    LoggedUser.onLogin(() => {
      $scope.isAdmin = LoggedUser.get().admin;
      $scope.isLogged = true;
    });

    LoggedUser.onLogout(() => {
      $scope.isLogged = false;
    });

    $scope.isLogged = false;

    $scope.image = logo;
  });

export default CONTROLLER;