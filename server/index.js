const http = require('http');

const port = 8000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('React Project');
});

server.listen(port, function (err) {
    if (err) {
        console.log(err);
    }

    console.log("This server is running on", port);
})