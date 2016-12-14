angular.module("weatherApp")
.controller("todayCtrl", function($scope, mainService){
  var defaultZip = "84606";
  // mainService.getTodayWeather(defaultZip).then(function(response){
  //   $scope.weather = response.data;
  // })
  //
  // $scope.getWeather = function(zip){
  //   mainService.getTodayWeather(zip).then(function(response){
  //     $scope.weather = response.data;
  //   })
  // }


  $scope.getWeather = function(zip){
    mainService.getForecastWeather(zip).then(function(response){
      $scope.cityData = response.data.query.results.channel;
      var todayData = response.data.query.results.channel.item.forecast[0];
      $scope.weather = todayData;
      console.log('todayData: ',todayData);
    })
  }
  $scope.getWeather(defaultZip);








})
