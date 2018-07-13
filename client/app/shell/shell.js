import angular from 'angular';

import controller from './shell.controller';
import template from './shell.html';

import './shell.less';

angular.module('advanced.controllers')
    .config($stateProvider => {
      $stateProvider
            .state('shell', {
              abstract: true,
              template,
              controller
            });
    });