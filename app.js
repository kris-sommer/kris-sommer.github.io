angular.module("weatherApp", ['ngAnimate', "ui.router"])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state("today", {
        url: "/today",
        templateUrl: "today/today.html",
        controller: "todayCtrl"
      })
      .state("forecast", {
        url: "/forecast",
        templateUrl: "forecast/forecast.html",
        controller: "forecastCtrl"

      })
      .state("activities", {
        url: "/activities",
        controller: "activitiesCtrl",
        templateUrl: "activities/activities.html"

      })
      $urlRouterProvider.otherwise("/today");
  });

  angular
    .module('weatherApp')
    .animation('.slide', function() {
  		var NG_HIDE_CLASS = 'ng-hide';
  		return {
  			beforeAddClass: function(element, className, done) {
  				if(className === NG_HIDE_CLASS) {
  					element.slideUp(done);
  				}
  			},
  			removeClass: function(element, className, done) {
  				if(className === NG_HIDE_CLASS) {
  					element.hide().slideDown(done);
  				}
  			}
  		}
  });
