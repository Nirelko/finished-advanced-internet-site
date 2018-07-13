import angular from 'angular';
import io from 'socket.io-client';

import { remove } from 'lodash';

import editReviewDialog from './edit-review';

const CONTROLLER = 'adminController';

angular.module('advanced.controllers')
.controller(CONTROLLER, ($scope, Review, $mdDialog, $mdToast, LoggedUser) => {
  LoggedUser.ensureLogged();

  const socket = io('http://localhost:8318/');
  socket.on('refresh', () => {
    $scope.reviews = Review.query();
  });

  $scope.reviews = Review.query();

  $scope.editReview = review => $mdDialog.show({
    controller: editReviewDialog.controller,
    template: editReviewDialog.template,
    clickOutsideToClose: false,
    locals: {
      review
    }
  });

  $scope.deleteReview = review => Review.delete({ id: review._id }).$promise
    .then(() => remove($scope.reviews, ({ _id }) => _id === review._id))
    .then(() => $mdToast.show($mdToast.simple()
      .textContent('Review deleted!')
      .position('bottom left')
      .hideDelay(3000)
    ));
});

export default CONTROLLER;