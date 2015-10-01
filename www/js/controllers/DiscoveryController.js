angular.module('SoundTouchHack.controller.DiscoveryController', [])

  .controller('DiscoveryController', function($scope, $rootScope, $localStorage){

    $scope.devices2 = [];

    $rootScope.device = $localStorage.device;

    $scope.DiscoverZeroConf = function() {
      ZeroConf.list('_soundtouch._tcp.local.', 3000,
        function(result) {
          console.log('ZeroConf success: ' + JSON.stringify(result));
          $scope.$apply(function () {
            if (angular.isDefined(result)) {
              var deviceArray = result.service;
              $scope.devices = deviceArray;
            }
          });
        },
        function(error){
          alert('ZeroConf error');
        }
      );
    };

    $scope.DiscoverBonjour = function() {

      $scope.loading = "Searching ...";
      $scope.devices2 = [];

      function serviceLost(serviceName, regType, domain, moreComing) {
        console.log("js serviceLost "+serviceName+" "+regType+" "+moreComing);

        $scope.$apply(function () {
          angular.forEach($scope.devices2, function(obj, index){
            if (obj.serviceName === serviceName) {
              // remove the matching item from the array
              $scope.devices2.splice(index, 1);
            }
          });
        });
      }

      function serviceFound(serviceName, regType, domain, moreComing) {
        console.log("js serviceFound "+serviceName+" "+regType+" "+moreComing);

        $scope.$apply(function () {
          $scope.devices2.push({
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
      //window.plugins.dnssd.browse("_soundtouch._tcp", "local", serviceFound, serviceLost);
    };

    $scope.SelectSoundtouch = function(url) {
      alert('clicked on url: ' + url);
      var device = this.device;

      $rootScope.$apply(function () {
        $rootScope.device = {
          serviceName: device.serviceName,
          hostName: url,
          port: url
        };
      });
    };

    $scope.SelectSoundtouchIos = function() {
      var device = this.device;
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
          });
      });
    };

  });
