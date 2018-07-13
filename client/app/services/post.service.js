import angular from 'angular';

angular.module('advanced.services')
    .factory('Post', $resource => $resource('/api/posts/:id/:controller', {
      id: '@_id'
    }, {
      update: {
        method: 'PUT'
      },
      byUsername: {
        method: 'GET',
        url: 'api/posts/byUsername',
        isArray: true
      },
      recomended: {
        method: 'GET',
        url: 'api/posts/:id/recomended'
      }
    }));