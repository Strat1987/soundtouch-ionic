angular.module('SoundTouchHack.controller.SoundTouchController', [])

.controller('SoundtouchController', function($scope, $localStorage, SoundtouchAPI, $window) {

  $scope.$on('$ionicView.enter', function() {
    $scope.device = $localStorage.device;
    if (typeof $scope.device !== 'undefined') {
      $scope.device.volume = SoundtouchAPI.getVolume($scope.device);
      console.log('SoundtouchAPI getVolume: ' + $scope.volume);

    }
  });

  $scope.volumeChanged = function() {
    console.log('Volume has changed: ' + $scope.device.volume);
    SoundtouchAPI.setVolume($scope.device);
  };

  $scope.selectDiscoverTab = function() {
    console.log('Select Discover tab');
    $window.location.href = '#/tab/discovery';
  };

});
