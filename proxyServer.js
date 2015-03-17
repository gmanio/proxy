var http = require('http');
var request = require('request');
var url = require('url');

http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');

    request.get({
        url : url.parse(req.url, true).query.sURL
    }).pipe(res);

}).listen(7777);