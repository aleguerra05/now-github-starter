var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    
    var ip = (req.headers['x-forwarded-for'] || '').split(',').pop() || 
         req.connection.remoteAddress || 
         req.socket.remoteAddress || 
         req.connection.socket.remoteAddress;
    
    
     if (/favicon\.ico/.test(req.url)) {
        fs.readFile("favicon.ico", function(err, data) {
            if (err) {
                console.log(err);
            } else {
                res.setHeader("Content-Type","image/x-icon");
                res.end(data);
            }
        });
      }
    else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<!DOCTYPE html><html><body>');
        res.write('<h1>Hello World!</h1>');
        res.write('<h2>Request url: '+ req.url+'</h2>');
        res.write('<h2>The date and time are currently: ' + myDateTime() + '</h2>');
        res.write('<h2>Your ip address: ' + ip + '</h2>');
        res.write('</body></html>');
        res.end();
      }
    console.log('page loaded! --- ' + req.url);
    console.log('from         --- ' + ip);
    
}).listen();

myDateTime = function () {
    return Date();
};
