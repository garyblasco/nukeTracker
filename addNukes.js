var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-type': 'text/html'});
	var q = url.parse(req.url, true).query;
	var txt = q.target + ' ' + q.date + ' ' + q.nukes; 
	res.write('Added! <br> Name: ' + q.target +'<br> Nukes: ' + q.nukes + '<br> Date & Time: ' + q.date + '<br>');
	res.end('<a href="http://test.com/?target=' + q.target + '&date=' + q.date + '&nukes=' + q.nukes + '">test url</a>');
}).listen(8080);
