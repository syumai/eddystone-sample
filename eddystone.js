/*
 * Simple Eddystone-URL Beacon
 */

var eddystoneBeacon = require('eddystone-beacon')
var url = process.argv[2]
eddystoneBeacon.advertiseUrl(url)
console.log(`Now advertising url: ${url}`)
