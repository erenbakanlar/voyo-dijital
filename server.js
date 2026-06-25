// Plesk/Passenger için Next.js başlangıç dosyası.
// Passenger bu dosyayı panelde seçili Node sürümüyle (tam yol ile) çalıştırır,
// böylece "next start"taki PATH/eski-node sorunu yaşanmaz.
const { createServer } = require("http");
const next = require("next");

const app = next({ dev: false });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

app.prepare().then(() => {
  createServer((req, res) => handle(req, res)).listen(port, () => {
    console.log(`> VOYO hazır — port ${port}`);
  });
});
