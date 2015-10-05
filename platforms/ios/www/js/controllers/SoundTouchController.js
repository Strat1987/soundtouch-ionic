angular.module('SoundTouchHack.controller.SoundTouchController', ['SoundTouchHack.service.SoundTouchAPI'])

.controller('SoundtouchController', function($scope, $localStorage, SoundtouchAPI, $window) {

  $scope.$on('$ionicView.enter', function() {

    $scope.device = $localStorage.device;

    if (typeof $scope.device !== 'undefined') {
      $scope.device.volume = 20;
      $scope.device.volume = SoundtouchAPI.getVolume($scope.device);
      console.log('SoundtouchAPI getVolume: ' + $scope.volume);

    }
  });

    $scope.getVol = function() {
      $scope.device.volume = SoundtouchAPI.getVolume($scope.device)
    };

  $scope.volumeChanged = function() {
    console.log('Volume has changed: ' + $scope.device.volume);
    SoundtouchAPI.setVolume($scope.device);
  };

  $scope.selectDiscoverTab = function() {
    console.log('Select Discover tab');
    $window.location.href = '#/tab/discovery';
  };

});
