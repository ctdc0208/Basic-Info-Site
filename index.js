const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  let filePath = '.' + req.url;

  // Set default file to serve
if (filePath === './')
    filePath = './index.html';

if (filePath === './about')
    filePath = './about.html';
   
if (filePath === './contact-me')
    filePath = './contact-me.html';

  // Determine the appropriate content type based on file extension
  const contentType = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript'
  };

  // Check if the requested file exists
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (!err) {
      // File exists, serve it
      fs.readFile(filePath, (err, content) => {
        if (!err) {
          res.writeHead(200, { 'Content-Type': contentType[path.extname(filePath)] });
          res.end(content, 'utf-8');
        }
      });
    } else {
      // File doesn't exist, serve 404.html
      fs.readFile('./404.html', (err, content) => {
        if (!err) {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end(content, 'utf-8');
        }
      });
    }
  });
});

const port = 8080;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
