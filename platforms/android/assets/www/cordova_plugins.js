cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
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
    "com.triggertrap.ZeroConf": "1.1.0",
    "fi.peekpoke.cordova.dnssd": "0.0.2"
}
// BOTTOM OF METADATA
});