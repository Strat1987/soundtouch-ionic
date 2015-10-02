angular.module('soundtouch.controllers', [])

.controller('SoundtouchController', ['$scope', '$stateParams', 'SoundtouchAPI', function($scope, $stateParams, SoundtouchAPI) {
    console.log('in soundtouchController');
    $scope.soundtouchUrl = $stateParams.soundtouchUrl;
    console.log('SoundtouchController URL: ' + $scope.soundtouchUrl);
    console.log('SoundtouchAPI getVolume: ' + SoundtouchAPI.getVolume());
}])

.controller('DiscoveryController', ['$scope', '$location', function($scope, $location) {
  $scope.DiscoverZeroConf = function() {
    // use '_soundtouch._tcp.local.' to find soundtouch, use '_http._tcp.local.' to find all
    ZeroConf.list('_soundtouch._tcp.local.', 3000,
      function(result) {
        console.log('ZeroConf success: ' + JSON.stringify(result));
        $scope.$apply(function () {
          if (typeof result !== 'undefined') {
            var deviceArray = result.service;
            if(typeof deviceArray !== "undefined") {
              for(var i = 0; i < deviceArray.length; i++) {
                var device = deviceArray[i];
                device.url = device.urls[0].replace('http://', '');
              }
            }
            $scope.devices = deviceArray;
          }
        });
      },
      function(error){
        alert('ZeroConf error');
      }
    );
  };
    $scope.selectSoundtouch = function(url) {
      console.log('selected soundtouch');
      console.log('URL: ' + url);
      $location.path(url);
    }

}]);
