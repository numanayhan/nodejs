
#  Node.js WebSocket 

[![Version npm](https://img.shields.io/npm/v/ws.svg?logo=npm)](https://www.npmjs.com/package/ws)
[![Linux Build](https://img.shields.io/travis/websockets/ws/master.svg?logo=travis)](https://travis-ci.com/websockets/ws)
[![Windows Build](https://img.shields.io/appveyor/ci/lpinca/ws/master.svg?logo=appveyor)](https://ci.appveyor.com/project/lpinca/ws)
[![Coverage Status](https://img.shields.io/coveralls/websockets/ws/master.svg)](https://coveralls.io/github/websockets/ws)
  
NodeJS kütüphanesi ile WebSocket örneği yapıldı.

Echo Sitesi ve Origin kullanıldı.

Değişiklik için geliştirmeye devam edilecektir.

## Installing

```
npm install ws
```
  
## WebSocket 
 
const WebSocket = require('ws');
  

## Usage examples    
```js
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

```
## License

[MIT](LICENSE)

[changelog]: https://github.com/websockets/ws/releases
[client-report]: http://websockets.github.io/ws/autobahn/clients/
[https-proxy-agent]: https://github.com/TooTallNate/node-https-proxy-agent
[node-zlib-bug]: https://github.com/nodejs/node/issues/8871
[node-zlib-deflaterawdocs]:
  https://nodejs.org/api/zlib.html#zlib_zlib_createdeflateraw_options
[permessage-deflate]: https://tools.ietf.org/html/rfc7692
[server-report]: http://websockets.github.io/ws/autobahn/servers/
[session-parse-example]: ./examples/express-session-parse
[socks-proxy-agent]: https://github.com/TooTallNate/node-socks-proxy-agent
[ws-server-options]:
  https://github.com/websockets/ws/blob/master/doc/ws.md#new-websocketserveroptions-callback
