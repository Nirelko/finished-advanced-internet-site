import angular from 'angular';

const CONTROLLER = 'aboutController';

angular.module('advanced.controllers').controller(CONTROLLER, ($scope, $http, Map, $sce, LoggedUser) => {
  LoggedUser.ensureLogged();

  Map.query().$promise
    .then((result) => {
      $scope.location = result[0];

        let url = "https://www.bing.com/maps/embed?h=400&w=500&cp=" +
            $scope.location.latitude +
            "~" +
            $scope.location.longtitude +
            "&lvl=16&typ=d&sty=r&src=SHELL&FORM=MBEDV8"
      console.log(url);
      $scope.url = $sce.trustAsResourceUrl(url);

    });

  const URL = 'http://api.openweathermap.org/data/2.5/forecast/daily';

  const request = {
    method: 'GET',
    url: URL,
    params: {
      q: 'Jerusalem',
      mode: 'json',
      units: 'imperial',
      cnt: '7',
      appid: '51382f05320b25f9782e3ce520ca2e19'
    }
    
  };
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.fillStyle = "black";
ctx.fillText("We Made you know you better",10,50);
  $http(request)
    .then(response => {
      $scope.data = response.data.list[0].weather[0].description;
    });
});

export default CONTROLLER;