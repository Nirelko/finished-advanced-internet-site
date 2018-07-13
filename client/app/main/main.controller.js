import angular from 'angular';
import io from 'socket.io-client';

import newPostDialog from './new-review';

const CONTROLLER = 'mainController';

angular.module('advanced.controllers').controller(CONTROLLER, ($scope, Post, User, $mdDialog, LoggedUser) => {
  LoggedUser.ensureLogged();

  const logged = LoggedUser.get()._id;

  $scope.showUsers = false;
  $scope.posts = Post.query();
  $scope.users = User.query();
  $scope.postSearchTerm = '';
  $scope.postFilterBy = '';
  $scope.userSearchTerm = '';
  $scope.userFilterBy = '';

  $scope.postFilterTypes = ['author', 'title', 'content'];
  $scope.userFilterTypes = ['firstname', 'lastname', 'userName'];

  const socket = io('http://localhost:8318/');

  socket.on('refresh', () => {
    $scope.posts = Post.query();
  });

  Post.recomended({
    id: logged
  }).$promise
    .then(result => {
      $scope.recomendedPost = result;
    });

  $scope.searchPost = () => {
    $scope.showUsers = false;

    const filter = $scope.postFilterBy;
    let term = $scope.postSearchTerm;

    if (!filter) {
      term = '';
    }

    return Post.query({ term, filter }).$promise
      .then(result => {
        $scope.posts = result;
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

  $scope.openNewPostModal = () => $mdDialog.show({
    controller: newPostDialog.controller,
    template: newPostDialog.template,
    clickOutsideToClose: false
  });
});

export default CONTROLLER;