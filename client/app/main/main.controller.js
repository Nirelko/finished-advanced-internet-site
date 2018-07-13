import angular from 'angular';
import io from 'socket.io-client';

import newReviewDialog from './new-review';

const CONTROLLER = 'mainController';

angular.module('advanced.controllers').controller(CONTROLLER, ($scope, Review, User, $mdDialog, LoggedUser) => {
  LoggedUser.ensureLogged();

  const logged = LoggedUser.get()._id;

  $scope.showUsers = false;
  $scope.reviews = Review.query();
  $scope.users = User.query();
  $scope.reviewSearchTerm = '';
  $scope.reviewFilterBy = '';
  $scope.userSearchTerm = '';
  $scope.userFilterBy = '';

  $scope.reviewFilterTypes = ['author', 'title', 'content'];
  $scope.userFilterTypes = ['firstname', 'lastname', 'userName'];

  const socket = io('http://localhost:8318/');

  socket.on('refresh', () => {
    $scope.reviews = Review.query();
  });

  Review.recomended({
    id: logged
  }).$promise
    .then(result => {
      $scope.recomendedReview = result;
    });

  $scope.searchReview = () => {
    $scope.showUsers = false;

    const filter = $scope.reviewFilterBy;
    let term = $scope.reviewSearchTerm;

    if (!filter) {
      term = '';
    }

    return Review.query({ term, filter }).$promise
      .then(result => {
        $scope.reviews = result;
      });
  };

  $scope.searchUser = () => {
    $scope.showUsers = true;

    const filter = $scope.userFilterBy;
    let term = $scope.userSearchTerm;

    if (!filter) {
      term = '';
    }

    return User.query({ term, filter }).$promise
      .then(result => {
        $scope.users = result;
      });
  };

  $scope.openNewReviewModal = () => $mdDialog.show({
    controller: newReviewDialog.controller,
    template: newReviewDialog.template,
    clickOutsideToClose: false
  });
});

export default CONTROLLER;