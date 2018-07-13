import angular from 'angular';

const CONTROLLER = 'newPost';

angular.module('advanced.controllers').controller(CONTROLLER, ($scope, Review, $mdDialog, LoggedUser) => {
  const loggedUser = LoggedUser.get();

  $scope.categories = ['Electronics', 'Technology', 'Programming', 'Cars', 'Home'];
  $scope.review = {
    content: '',
    title: '',
    author: loggedUser.userName,
    category: ''
  };

  $scope.savePost = () => {
    $scope.post.date = new Date();

    return Review.save($scope.post).$promise
      .then($mdDialog.hide);
  };

  $scope.closeModal = $mdDialog.hide;
});

export default CONTROLLER;