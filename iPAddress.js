
//var ifaces = require('os').networkInterfaces();

//// Iterate over interfaces ...
//var adresses = Object.keys(ifaces).reduce(function (result, dev) {
//    return result.concat(ifaces[dev].reduce(function (result, details) {
//        return result.concat(details.family === 'IPv4' && !details.internal ? [details.address] : []);
//    }, []));
//});

//var address, os = require('os'), ifaces = os.networkInterfaces();
//for (var dev in ifaces) {    
//    var iface = ifaces[dev].filter(function (details) {
//        return details.family === 'IPv4' && details.internal === false;
//    });
//    if (iface.length > 0) address = iface[0].address;
//}

var IP, ifaces = require('os').networkInterfaces();
for (var dev in ifaces) {
    ifaces[dev].filter((details) => details.family === 'IPv4' && details.internal === false ? IP = details.address : undefined);
}

module.exports = {IP}