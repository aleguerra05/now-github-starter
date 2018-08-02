var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<!DOCTYPE html><html><body>');
    res.write('<h1>Hello World!</h1>');
    res.write('<h2>Request url: '+ req.url+'</h2>');
    res.write('<h2>The date and time are currently: ' + myDateTime() + '</h2>');
    res.write('</body></html>');
    console.log('page loaded!');
    res.end();
}).listen();

myDateTime = function () {
    return Date();
};
