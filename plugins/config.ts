import Fastify from "fastify"

function takeConfig(app) {
  app.decorate("config", {
    port: 3000,
    appName: "TaskFlow"
  });
}
app.register(takeConfig);