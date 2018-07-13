import angular from 'angular';

const CONTROLLER = 'newPost';

angular.module('advanced.controllers').controller(CONTROLLER, ($scope, Review, $mdDialog, LoggedUser, Categories) => {
  const loggedUser = LoggedUser.get();

  $scope.categories = Categories;
  $scope.review = {
    content: '',
    title: '',
    author: loggedUser.userName,
    category: ''
  };

  $scope.saveReview = () => {
    $scope.review.date = new Date();

    return Review.save($scope.review).$promise
      .then($mdDialog.hide);
  };

  $scope.closeModal = $mdDialog.hide;
});

export default CONTROLLER;