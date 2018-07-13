import angular from 'angular';

import controller from './admin.controller';
import template from './admin.html';

import './edit-post/edit-post.less';

angular.module('advanced.controllers')
    .config($stateProvider => {
      $stateProvider
            .state('shell.admin', {
              url: '/admin',
              template,
              controller
            });
    });