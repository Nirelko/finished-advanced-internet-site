import angular from 'angular';

angular.module('advanced.services')
    .factory('User', $resource => $resource('/api/users/:id/:controller', {
      id: '@_id'
    }, {
      login: {
        method: 'PUT'
      }
    }));