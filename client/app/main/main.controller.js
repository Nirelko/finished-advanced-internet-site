import angular from 'angular';
import io from 'socket.io-client';

import newReviewDialog from './new-review';

const CONTROLLER = 'mainController';

angular.module('advanced.controllers').controller(CONTROLLER, ($scope, Review, User, $mdDialog, LoggedUser) => {
  LoggedUser.ensureLogged();

  const loggedId = LoggedUser.get()._id;

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

  Review.recomended({
    id: loggedId
  }).$promise
    .then(review => {
      $scope.recomendedReview = review;
    });

  $scope.searchReview = () => {
    $scope.showUsers = false;

    const filter = $scope.reviewFilterBy;
    let term = $scope.reviewSearchTerm;

    if (!filter) {
      term = '';
    }

    return Review.query({term, filter}).$promise
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

    return User.query({term, filter}).$promise
      .then(result => {
        $scope.users = result;
      });
  };

  $scope.getUserAvatarId = authorName => $scope.users.$resolved && $scope.users.find(x => x.userName === authorName).avatarId;

  $scope.openNewReviewModal = () => $mdDialog.show({
    controller: newReviewDialog.controller,
    template: newReviewDialog.template,
    clickOutsideToClose: false
  });
});

export default CONTROLLER;