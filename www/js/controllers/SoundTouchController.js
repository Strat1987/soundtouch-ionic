angular.module('SoundTouchHack.controller.SoundTouchController', ['SoundTouchHack.service.SoundTouchAPI','ngWebSocket'])

.controller('SoundtouchController', function($scope, $localStorage, SoundtouchAPI, $window, $websocket) {

  $scope.$on('$ionicView.enter', function() {

    $localStorage.device = {
        serviceName: 'TEST',
        hostName: '68c90b299e00.local.',
        port: '8090'
    };

    $scope.device = $localStorage.device;

    if (typeof $scope.device !== 'undefined') {
      $scope.device.volume = 15;
      SoundtouchAPI.getVolume($scope.device);
      console.log('SoundtouchAPI getVolume: ' + $scope.now_playing);

      $scope.device.now_playing = SoundtouchAPI.getNowPlaying($scope.device);
      console.log('SoundtouchAPI nowPlaying: ' + $scope.now_playing);
    }
  });

    $scope.startSocket = function() {
      SoundtouchAPI.getVolume($scope.device);
      //$scope.device.volume = SoundtouchAPI.getVolume($scope.device);

      var dataStream = $websocket('ws://' + $scope.device.hostName + ":8080", 'gabbo');

      dataStream.onMessage(function(message) {
        console.log(message.data);
        console.log(xmlToJson($.parseXML(message.data)));
      });

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
