import angular from 'angular';

const CONTROLLER = 'aboutController';

angular.module('advanced.controllers').controller(CONTROLLER, ($scope, $http, Map, $sce, LoggedUser) => {
  LoggedUser.ensureLogged();

  Map.query().$promise
    .then((result) => {
      $scope.location = result[0];

        let url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54268.34605025772!2d"+
            $scope.location.latitude +
            "!3d" +
            $scope.location.longtitude +
            "!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x150329c939ceab8f%3A0x83ad5efed1777179!2z15vXldeq15wg15TXntei16jXkdeZ!5e0!3m2!1siw!2sil!4v1533377853012"
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