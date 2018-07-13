import angular from 'angular';

import controller from './main.controller';
import template from './main.html';

import './main.less';

const MODULE_NAME = 'advanced.controllers';

angular.module(MODULE_NAME)
    .config($stateProvider => {
      $stateProvider
            .state('shell.main', {
              url: '/',
              template,
              controller
            });
    });