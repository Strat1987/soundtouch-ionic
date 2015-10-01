// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('soundtouch', ['ionic'])

.controller('DiscoveryController', ['$scope', function($scope) {
  $scope.Discover = function() {
    alert('hello');
    alert('Discovery:' + Discovery);
    alert('identify:' + Discovery.identify);
    $scope.serviceData = 'tempServiceData';
    Discovery.identify(function(serviceData) {
      // serviceData contains info about the identified service
      alert('Identified serviceData');
    }, function(error) {
      alert('Error Identifying serviceData');
    }, {
      clientName: "soundtouch", // the name the server expects to see for clients connecting
      port: 41234 // the port the service's broadcast service is running on
    });
    //TODO callback functions don't get triggered, maybe try to figure out how to use NPM module
    // --> https://github.com/agnat/node_mdns
    //TODO or try other plugin https://github.com/vstirbu/ZeroConf
  };
}])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
