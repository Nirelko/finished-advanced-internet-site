import angular from 'angular';

import controller from './admin.controller';
import template from './admin.html';

import './edit-review/edit-review.less';

angular.module('advanced.controllers')
    .config($stateProvider => {
      $stateProvider
            .state('shell.admin', {
              url: '/admin',
              template,
              controller
            });
    });