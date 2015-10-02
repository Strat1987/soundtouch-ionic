angular.module('SoundTouchHack.controller.SoundTouchController', [])

  .controller('SoundtouchController', ['$scope', '$rootScope', '$stateParams', '$localStorage', 'SoundtouchAPI',
    function($scope, $rootScope, $stateParams, $localStorage, SoundtouchAPI) {
    //$scope.soundtouchUrl = $rootScope.soundtouchUrl;



    console.log('in soundtouchController');
    $scope.soundtouchUrl = $stateParams.soundtouchUrl;
    console.log('SoundtouchController URL: ' + $scope.soundtouchUrl);
    console.log('SoundtouchAPI getVolume: ' + SoundtouchAPI.getVolume());


    $rootScope.device = $localStorage.device;
  }]);
