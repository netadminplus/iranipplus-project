import next from "next";
import { createServer } from "http";

const port = parseInt(process.env.PORT ?? "3001", 10);
const dev  = process.env.NODE_ENV !== "production";
const app  = next({ dev, dir: __dirname + "/.." });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => handle(req, res)).listen(port, () => {
    console.log(`> Payload CMS ready on http://0.0.0.0:${port}`);
  });
});
