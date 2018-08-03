var http = require('http');

http.createServer(function (req, res) {
    
    var ip = (req.headers['x-forwarded-for'] || '').split(',').pop() || 
         req.connection.remoteAddress || 
         req.socket.remoteAddress || 
         req.connection.socket.remoteAddress;
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<!DOCTYPE html><html><body>');
    res.write('<h1>Hello World!</h1>');
    res.write('<h2>Request url: '+ req.url+'</h2>');
    res.write('<h2>The date and time are currently: ' + myDateTime() + '</h2>');
    res.write('<h2>Your ip address: ' + ip + '</h2>');
    res.write('</body></html>');
    res.end();
    console.log('page loaded! --- ' + req.url);
    console.log('from         --- ' + ip);
    
}).listen();

myDateTime = function () {
    return Date();
};
