const { createServer } = require("node:http");

const hostname = "localhost"; // localhost
const port = 3000;//port là nơi chạy dự án của chúng ta 

const server = createServer((req, res) => {//nhớ có hàm này mà ta có thể render ra nội dung của website
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
