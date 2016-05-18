angular.module('weatherApp')
  .controller('ForecastController', ForecastController);

function ForecastController($scope, $resource, $routeParams, cityService) {
  
  $scope.city = cityService.city
  
  $scope.days = $routeParams.days || '2';
  
  $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=f8ce2c8eba7b17ce709631921bc30f64", { callback: "JSON_CALLBACK" }, {get: {method: "JSONP" }});
  
  $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt:$scope.days });
  
  console.log($scope.weatherResult)
  
 $scope.convertFahrenheight = function(degK) {
   
    return Math.round((1.8 * (degK - 273 )) + 32);
   
 }
 
 $scope.convertToDate = function (dt) {
   
   return new Date(dt * 1000);
   
 }
  
}