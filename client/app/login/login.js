import angular from 'angular';

import controller from './login.controller';
import template from './login.html';

angular.module('advanced.controllers')
    .config($stateProvider => {
      $stateProvider
            .state('shell.login', {
              url: '/login',
              template,
              controller
            });
    });