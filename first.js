var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<!DOCTYPE html><html><body>');
    res.write('<h1>Hello World!</h1>');
    res.write('<h2>Request url: '+ req.url+'</h2>');
    res.write('<h2>The date and time are currently: ' + myDateTime() + '</h2>');
    res.write('<h2>Your ip address: ' + request.connection.remoteAddress + '</h2>');
    res.write('</body></html>');
    res.end();
    console.log('page loaded! --- ' + req.url);
    console.log('from         --- ' + request.connection.remoteAddress);
    
}).listen();

myDateTime = function () {
    return Date();
};
