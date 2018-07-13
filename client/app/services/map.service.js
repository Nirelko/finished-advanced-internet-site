import angular from 'angular';

angular.module('advanced.services')
    .factory('Map', $resource => $resource('/api/map'));