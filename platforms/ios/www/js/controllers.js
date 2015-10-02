angular.module('soundtouch.controllers', [])

.controller('SoundtouchController', ['$scope', '$rootScope', function($scope, $rootScope) {
  $scope.soundtouchUrl = $rootScope.soundtouchUrl;
}])

.controller('DiscoveryController', ['$scope', '$rootScope', function($scope, $rootScope) {
  $scope.DiscoverZeroConf = function() {
    // use '_soundtouch._tcp.local.' to find soundtouch, use '_http._tcp.local.' to find all
    ZeroConf.list('_soundtouch._tcp.local.', 3000,
      function(result) {
        console.log('ZeroConf success: ' + JSON.stringify(result));
        $scope.$apply(function () {
          if (typeof result !== 'undefined') {
            var deviceArray = result.service;
            $scope.devices = deviceArray;
          }
        });
      },
      function(error){
        alert('ZeroConf error');
      }
    );
  };

  $scope.SelectSoundtouch = function(url) {
    alert('clicked on url: ' + url);
    $rootScope.soundtouchUrl = url;
  }
}]);
