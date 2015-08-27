/*
 * Advertise posted url.
 */

var express = require('express')
var bodyParser = require('body-parser')
var eddystoneBeacon = require('eddystone-beacon')

var app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.post('/url', function(req, res){
	console.log(req.body.url)
	eddystoneBeacon.stop()
	eddystoneBeacon.advertiseUrl(req.body.url)
	res.send('ok')
});
app.listen(8080)
