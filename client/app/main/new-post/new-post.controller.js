import angular from 'angular';

const CONTROLLER = 'newPost';

angular.module('advanced.controllers').controller(CONTROLLER, ($scope, Post, $mdDialog, LoggedUser) => {
  const loggedUser = LoggedUser.get();

  $scope.difficulties = [1, 2, 3];
  $scope.post = {
    content: '',
    title: '',
    author: loggedUser.userName,
    difficulty: 1
  };

  $scope.savePost = () => {
    $scope.post.date = new Date();

    return Post.save($scope.post).$promise
      .then($mdDialog.hide);
  };

  $scope.closeModal = $mdDialog.hide;
});

export default CONTROLLER;