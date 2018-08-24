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
      else if(/rest1/.test(req.url)){

        var CUB0001 = {title:"Welcome 1",details:"This is the grettings message 1", dateTime:Date(), image:base64_encode("image.jpg")};

        
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify({CUB0001}));
        res.end();
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
    
}).listen(function (){console.log('Server Started...')});

function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}

myDateTime = function () {
    return Date();
};
