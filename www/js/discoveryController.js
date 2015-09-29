/**
 * Created by roexber on 29/09/15.
 */
var myApp = angular.module('soundtouch',[]);

myApp.controller('DiscoveryController', ['$scope', function($scope) {
  $scope.Discover = function() {
    alert('hello');
    /*console.log(window.plugins.Discovery);
    $scope.Discovery = window.plugins.Discovery;
    window.plugins.Discovery.identify(function(serviceData) {
         // serviceData contains info about the identified service
        console.log(serviceData);
      $scope.serviceData = serviceData;
       }, function(error) {}, {
       clientName: "superDiscoverer", // the name the server expects to see for clients connecting
       port: 41234 // the port the service's broadcast service is running on
     });
*/
  };
}]);
