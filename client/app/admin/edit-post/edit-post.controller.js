import angular from 'angular';

const CONTROLLER = 'editPost';

angular.module('advanced.controllers').controller(CONTROLLER, ($scope, Post, $mdDialog, $mdToast, post) => {
  $scope.difficulties = [1, 2, 3];
  $scope.post = {
    author: post.author,
    content: post.content,
    title: post.title,
    difficulty: post.difficulty
  };

  $scope.editPost = () => {
    Post.update({ id: post._id }, $scope.post).$promise
      .then(() => $mdDialog.hide())
      .then(() => {
        return $mdToast.show(
          $mdToast.simple()
            .textContent('Review updated!')
            .position('bottom left')
            .hideDelay(3000)
        );
      });
  };
  
  $scope.closeModal = $mdDialog.hide;
});

export default CONTROLLER;