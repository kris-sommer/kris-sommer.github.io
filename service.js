angular.module("weatherApp")
.service('mainService', function($http){
  var baseUrl = "https://api.openweathermap.org/data/2.5";

  this.getTodayWeather = function(zipCode){
    return $http({
      method: "GET",
      url: baseUrl + "/weather?zip=" + zipCode + "&APPID=439c82092819c9f87262b0f31006e4af&units=imperial"
    })
  }

  this.getForecastWeather = function(zipCode){
    return $http({
      method: "GET",
      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + zipCode + "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
    })
  }

});
// <div ng-cloak ng-repeat="user in users">


/*
"https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + zipCode + "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
*/
