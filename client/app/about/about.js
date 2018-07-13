import angular from 'angular';

import controller from './about.controller';
import template from './about.html';

import './about.less';

const MODULE_NAME = 'advanced.controllers';

angular.module(MODULE_NAME)
    .config($stateProvider => {
      $stateProvider
            .state('shell.about', {
              url: '/about',
              template,
              controller
            });
    });
