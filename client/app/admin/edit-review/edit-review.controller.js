import angular from 'angular';

const CONTROLLER = 'editreview';

angular.module('advanced.controllers').controller(CONTROLLER, ($scope, Review, Categories, $mdDialog, $mdToast, review) => {
  $scope.categories = Categories;
  $scope.review = {
    author: review.author,
    content: review.content,
    title: review.title,
    category: review.category
  };

  $scope.editreview = () => {
    review.update({ id: review._id }, $scope.review).$promise
      .then(() => $mdDialog.hide())
      .then(() => $mdToast.show(
          $mdToast.simple()
            .textContent('Review updated!')
            .position('bottom left')
            .hideDelay(3000)
        ));
  };

  $scope.closeModal = $mdDialog.hide;
});

export default CONTROLLER;