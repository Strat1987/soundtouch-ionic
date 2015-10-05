angular.module('SoundTouchHack.controller.SoundTouchController', ['SoundTouchHack.service.SoundTouchAPI'])

.controller('SoundtouchController', function($scope, $localStorage, SoundtouchAPI, $window) {

  $scope.$on('$ionicView.enter', function() {

    $scope.device = $localStorage.device;

    if (typeof $scope.device !== 'undefined') {
      $scope.device.volume = SoundtouchAPI.getVolume($scope.device);
      console.log('SoundtouchAPI getVolume: ' + $scope.now_playing);

      $scope.device.now_playing = SoundtouchAPI.getNowPlaying($scope.device);
      console.log('SoundtouchAPI nowPlaying: ' + $scope.now_playing);
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
