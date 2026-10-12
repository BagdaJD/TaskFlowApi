import app from "./app.js"

try {
  await app.ready();
  await app.listen({
    port: app.config.port
  });
} catch (e) {
  app.log.error(e);
  process.exit(1);
}
