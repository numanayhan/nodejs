const http = require("http");
const WebSocket = require("ws");
const url = require("url");

const server = http.createServer();
const wss1 = new WebSocket.Server({ noServer: true });
const wss2 = new WebSocket.Server({ noServer: true });

const ws = new WebSocket("wss://echo.websocket.org/", {
  origin: "https://websocket.org"
});

ws.on("open", function open() {
  console.log("connected");
  ws.send(Date.now());
});

ws.on("close", function close() {
  console.log("disconnected");
});

ws.on("message", function incoming(data) {
  console.log(`Roundtrip time: ${Date.now() - data} ms`);

  setTimeout(function timeout() {
    ws.send(Date.now());
  }, 500);
});
console.log("listen : 8080");
server.listen(8080);
