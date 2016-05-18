angular
  .module('weatherApp')
  .controller('HomeController', HomeController)
  

function HomeController($scope, cityService) {
  
  $scope.city = cityService.city
  
  $scope.$watch('city', function() {
    cityService.city = $scope.city;
  })
  
};