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
            return data;
          }
        }).success(function(data, status, headers, config) {
          console.log(data);  // XML document object
          //$scope.xml = data.documentElement.innerHTML;
        }).error(function(data, status, headers, config) {
          console.log('FAILED');
          console.log(status);
        });
      },
      getVolume: function(device) {
        $http({
          method  : 'GET',
          url     : 'http://' + device.hostName + ':' + device.port+ '/volume',
          timeout : 10000,
          headers: { "Content-Type": 'application/x-www-form-urlencoded' },
          transformResponse : function(data) {
            // string -> XML document object
            return data;
          }
        }).success(function(data, status, headers, config) {
          console.log(data);  // XML document object
          alert('OK');
          //$scope.xml = data.documentElement.innerHTML;
        }).error(function(data, status, headers, config) {
          console.log('FAILED');
          console.log(data);
        });
      }
    };
  });
