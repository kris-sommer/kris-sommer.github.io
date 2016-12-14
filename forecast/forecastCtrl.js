angular.module("weatherApp")
.controller("forecastCtrl", function($scope, mainService){
  var defaultZip = "84606";

  $scope.getWeather = function(zip){
    mainService.getForecastWeather(zip).then(function(response){
      $scope.cityData = response.data.query.results.channel;
      console.log(response.data);
      var allData = response.data.query.results.channel.item.forecast.splice(0, 5);
      for (var i = 0; i < allData.length; i++) {
        allData[i].date = moment(allData[i].date).format("ddd");
      }
      $scope.forecastWeather = allData;
        console.log($scope.forecastData)
    })
  }
  $scope.getWeather(defaultZip);
})
