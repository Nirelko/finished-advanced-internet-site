import angular from 'angular';
import io from 'socket.io-client';

import newReviewDialog from './new-review';

const CONTROLLER = 'mainController';

angular.module('advanced.controllers').controller(CONTROLLER, ($scope, Review, User, $mdDialog, LoggedUser) => {

  LoggedUser.ensureLogged().then((id) => {
    $scope.loggedId = id;
    Review.recomended({
        id: $scope.loggedId
      }).$promise
      .then(review => {
        console.log(review);
        if (review['value'] != -1) {
          $scope.recomendedReview = review;
        }
      });
    console.log(id);
  });

  $scope.showUsers = false;
  $scope.reviews = Review.query();
  $scope.users = User.query();
  $scope.filter = {
    reviewSearchTerm: '',
    reviewFilterBy: ''
  };
  $scope.userSearch = {
    userSearchTerm: '',
    userFilterBy: ''
  }

  $scope.reviewFilterTypes = ['author', 'title', 'content'];
  $scope.userFilterTypes = ['firstname', 'lastname', 'userName'];

  const socket = io('http://localhost:8318/');

  socket.on('review', ({
    action,
    review,
    id
  }) => {
    if (action === 'delete') {
      $scope.reviews = $scope.reviews.filter(x => x._id !== id);
    } else {
      let itemIndex = $scope.reviews.indexOf($scope.reviews.find(x => x._id === review._id));

      itemIndex = itemIndex !== -1 ? itemIndex : $scope.reviews.length;

      $scope.reviews[itemIndex] = review;
    }

    $scope.$apply();
  });



  $scope.searchReview = () => {
    $scope.showUsers = false;

    const filter = $scope.filter.reviewFilterBy;
    let term = $scope.filter.reviewSearchTerm;
    console.log($scope.filter.reviewSearchTerm);

    if (!filter) {
      term = '';
    }

    return Review.query({
        term,
        filter
      }).$promise
      .then(result => {
        $scope.reviews = result;
      });
  };

  $scope.searchUser = () => {
    $scope.showUsers = true;

    const filter = $scope.userSearch.userFilterBy;
    let term = $scope.userSearch.userSearchTerm;

    if (!filter) {
      term = '';
    }

    return User.query({
        term,
        filter
      }).$promise
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