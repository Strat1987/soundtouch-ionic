cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.triggertrap.ZeroConf/www/ZeroConf.js",
        "id": "com.triggertrap.ZeroConf.zeroconf",
        "clobbers": [
            "ZeroConf"
        ]
    },
    {
        "file": "plugins/cordova-plugin-console/www/logger.js",
        "id": "cordova-plugin-console.logger",
        "clobbers": [
            "cordova.logger"
        ]
    },
    {
        "file": "plugins/cordova-plugin-console/www/console-via-logger.js",
        "id": "cordova-plugin-console.console",
        "clobbers": [
            "console"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/com.ionic.keyboard/www/keyboard.js",
        "id": "com.ionic.keyboard.keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ]
    },
    {
        "file": "plugins/com.ionicsdk.discovery/www/discovery.js",
        "id": "com.ionicsdk.discovery.discovery",
        "clobbers": [
            "Discovery"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.triggertrap.ZeroConf": "1.1.0",
    "cordova-plugin-console": "1.0.1",
    "fi.peekpoke.cordova.dnssd": "0.0.2",
    "cordova-plugin-device": "1.0.1",
    "cordova-plugin-whitelist": "1.0.0",
    "cordova-plugin-splashscreen": "2.1.0",
    "com.ionic.keyboard": "1.0.4",
    "com.ionicsdk.discovery": "0.1.0"
}
// BOTTOM OF METADATA
});