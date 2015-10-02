angular.module('SoundTouchHack.controller.DiscoveryController', [])

  .controller('DiscoveryController', function($scope, $rootScope, $localStorage, $location){

    $scope.devices = [];

    $rootScope.device = $localStorage.device;

    $scope.Discover = function() {
      if(ionic.Platform.isAndroid()) {
        console.log('Searching using ZeroConf (android)');

        $scope.loading = "Searching ...";
        $scope.devices = [];

        // use '_soundtouch._tcp.local.' to find soundtouch, use '_http._tcp.local.' to find all
        ZeroConf.list('_http._tcp.local.', 2000,
          function (result) {
            console.log('ZeroConf success: ' + JSON.stringify(result));
            $scope.$apply(function () {
              $scope.loading = "";
              if (typeof result !== 'undefined') {
                var deviceArray = result.service;
                if (typeof deviceArray !== "undefined") {
                  for (var i = 0; i < deviceArray.length; i++) {
                    var device = deviceArray[i];
                    var url = device.urls[0].replace('http://', '').split(':');

                    $scope.devices.push({
                      serviceName: device.name,
                      hostName: url[0],
                      port: url[1]
                    });
                  }
                }
              }
            });
          },
          function (error) {
            alert('ZeroConf error');
          }
        );
      } else if(ionic.Platform.isIOS()) {
        console.log('Searching using Bonjour (IOS)');

        $scope.loading = "Searching ...";
        $scope.devices = [];

        function serviceLost(serviceName, regType, domain, moreComing) {
          console.log("js serviceLost "+serviceName+" "+regType+" "+moreComing);

          $scope.$apply(function () {
            angular.forEach($scope.devices, function(obj, index){
              if (obj.serviceName === serviceName) {
                // remove the matching item from the array
                $scope.devices.splice(index, 1);
              }
            });
          });
        }

        function serviceFound(serviceName, regType, domain, moreComing) {
          console.log("js serviceFound "+serviceName+" "+regType+" "+moreComing);

          $scope.$apply(function () {
            $scope.devices.push({
              serviceName: serviceName,
              regType: regType,
              domain: domain,
              moreComing: moreComing
            });

            if(moreComing === false) {
              $scope.loading = "";
            }
          });
        }

        //window.plugins.dnssd.browse("_http._tcp", "local", serviceFound, serviceLost);
        //window.plugins.dnssd.browse("_daap._tcp", "local", serviceFound, serviceLost);
        window.plugins.dnssd.browse("_soundtouch._tcp", "local", serviceFound, serviceLost);
      } else {
        alert('Your mobile platform is not supported by the soundtouch app');
      }
    };
    $scope.selectSoundtouch = function() {
      console.log('selectSoundtouch');
      var device = this.device;
      console.log('Device: ' + JSON.stringify(device));
      if(ionic.Platform.isIOS()) {
        console.log('for IOS');
        window.plugins.dnssd.resolve(device.serviceName, device.regType, device.domain,
          function (hostName, port, serviceName, regType, domain) {
            //alert(serviceName+" is at "+hostName+":"+port);

            $rootScope.$apply(function () {
              $rootScope.device = {
                serviceName: serviceName,
                hostName: hostName,
                port: port
              };
              $localStorage.device = $rootScope.device;
              $location.path('#/tab/soundtouch');
            });
          });
      } else if(ionic.Platform.isAndroid()) {
        console.log('for Android');
        $rootScope.device = device;
        $localStorage.device = device;
        $location.path('#/tab/soundtouch');
      }
    }

  });
