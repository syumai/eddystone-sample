/*
 * Simple Eddystone-URL Beacon
 */

var eddystoneBeacon = require('eddystone-beacon')
var url = 'http://syumai.com/'
eddystoneBeacon.advertiseUrl(url)
