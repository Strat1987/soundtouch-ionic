angular.module('SoundTouchHack.service.SoundTouchAPI', [])

  .factory('SoundtouchAPI', function($http) {

    return {
      setVolume: function(device) {
        $http({
          method  : 'POST',
          url     : 'http://' + device.hostName + ':' + device.port+ '/volume',
          timeout : 10000,
          data    : '<volume>' + device.volume +'</volume>',
          headers: { "Content-Type": 'application/x-www-form-urlencoded' },
          transformResponse : function(data) {
            // string -> XML document object
            return $.parseXML(data);
          }
        }).success(function(data, status, headers, config) {
          console.dir(data);  // XML document object
          $scope.xml = data.documentElement.innerHTML;
        }).error(function(data, status, headers, config) {
          console.log('FAILED');
          console.log(status);
        });
      },
      getVolume: function(device) {
        $http.get(device.hostName + ':' + device.port + '/volume').then(
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
