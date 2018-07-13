import angular from 'angular';

import controller from './register.controller';
import template from './register.html';

angular.module('advanced.controllers')
    .config($stateProvider => {
      $stateProvider
            .state('shell.register', {
              url: '/register',
              template,
              controller
            });
    });