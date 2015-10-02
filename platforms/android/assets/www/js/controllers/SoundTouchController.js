angular.module('SoundTouchHack.controller.SoundTouchController', [])

  .controller('SoundtouchController', function($scope, $rootScope, $localStorage, SoundtouchAPI, $location) {

    $rootScope.device = $localStorage.device;
      $scope.volume =SoundtouchAPI.getVolume($rootScope.device);
    console.log('SoundtouchAPI getVolume: ' + $scope.volume);

      $scope.selectDiscoverTab = function() {
        console.log('Select Discover tab');
        $location.path('#/tab/discovery');
      }
  });
