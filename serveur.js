const http = require('http');
const url = require('url');
const cowsay = require('cowsay');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/cowsay' && parsedUrl.query.msg) {
    const message = parsedUrl.query.msg;
    const cow = cowsay.say({ text: message });
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(cow);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
