angular.module('SoundTouchHack.controller.SoundTouchController', [])

  .controller('SoundtouchController', ['$scope', '$rootScope', '$localStorage', function($scope, $rootScope, $localStorage) {
    $scope.soundtouchUrl = $rootScope.soundtouchUrl;

    $rootScope.device = $localStorage.device;

  }]);
