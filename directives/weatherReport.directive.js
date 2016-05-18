angular
  .module('weatherApp')
  .directive('weatherReport', weatherReport)

function weatherReport() {
  return {
      restrict: "E",
      templateUrl: 'directives/weatherReport.html',
      replace: true,
      scope: {
          weatherDay: "=",
          convertToStandard: "&",
          convertToDate: "&",
          dateFormat: "@"
      }
  }
  
}