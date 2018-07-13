import angular from 'angular';

angular.module('advanced.services')
    .factory('Review', $resource => $resource('/api/reviews/:id/:controller', {
      id: '@_id'
    }, {
      update: {
        method: 'PUT'
      },
      byUsername: {
        method: 'GET',
        url: 'api/reviews/byUsername',
        isArray: true
      },
      recomended: {
        method: 'GET',
        url: 'api/reviews/:id/recomended'
      }
    }));