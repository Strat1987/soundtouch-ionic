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
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.triggertrap.ZeroConf": "1.1.0",
    "cordova-plugin-console": "1.0.1",
    "fi.peekpoke.cordova.dnssd": "0.0.2"
}
// BOTTOM OF METADATA
});