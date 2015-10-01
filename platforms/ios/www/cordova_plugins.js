cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.ionicsdk.discovery/www/discovery.js",
        "id": "com.ionicsdk.discovery.discovery",
        "clobbers": [
            "Discovery"
        ]
    },
    {
        "file": "plugins/com.triggertrap.ZeroConf/www/ZeroConf.js",
        "id": "com.triggertrap.ZeroConf.zeroconf",
        "clobbers": [
            "ZeroConf"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.ionicsdk.discovery": "0.1.0",
    "com.triggertrap.ZeroConf": "1.1.0"
}
// BOTTOM OF METADATA
});