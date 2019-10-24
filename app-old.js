const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    let data = {
      name: "Xabier",
      age: 33,
      url: req.url
    };
    res.write(JSON.stringify(data));
    res.end();
  })
  .listen(8080);

console.log("Listen to port 8080");
