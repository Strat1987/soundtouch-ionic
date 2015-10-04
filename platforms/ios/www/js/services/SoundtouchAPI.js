angular.module('SoundTouchHack.service.SoundTouchAPI', [])

  .factory('SoundtouchAPI', function($http) {

    return {
      setVolume: function(device) {
        $http.post(device.hostName, {volume: device.volume}).then(
          function(result){
            console.log('succesfully posted volume');
          },
          function(error) {
            console.log('error while posting volume');
          }
        );
      },
      getVolume: function(device) {
        $http.get(device.hostName + '/volume').then(
          function(result){
            console.log('succesfully got volume');
            device.volume = 50;
          },
          function(error) {
            console.log('error while retreiving volume');
            device.volume = 10;
          }
        );
      }
    };
  });
