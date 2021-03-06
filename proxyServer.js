var http = require('http');
var request = require('request');
var url = require('url');

http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    
    //console.log('use Proxy');    

    request.get({
        url : url.parse(req.url, true).query.url
	}).pipe(res);

}).listen(8123);
