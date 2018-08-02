var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World!');
    res.write('The date and time are currently: ' + myDateTime());
    res.end();
}).listen();

myDateTime = function () {
    return Date();
};
