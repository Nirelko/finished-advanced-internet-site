import angular from 'angular';
import io from 'socket.io-client';

import { remove } from 'lodash';

import editReviewDialog from './edit-review';

const CONTROLLER = 'adminController';

angular.module('advanced.controllers')
.controller(CONTROLLER, ($scope, Review, $mdDialog, $mdToast, LoggedUser) => {
  LoggedUser.ensureLogged();

  const socket = io('http://localhost:8318/');

  socket.on('review', ({action, review, id}) => {
    if (action === 'delete') {
      $scope.reviews = $scope.reviews.filter(x => x._id !== id);
    }
    else {
      let itemIndex = $scope.reviews.indexOf($scope.reviews.find(x => x._id === review._id));

      itemIndex = itemIndex !== -1 ? itemIndex : $scope.reviews.length;

      $scope.reviews[itemIndex] = review;
    }

    $scope.$apply();
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