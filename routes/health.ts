import {type FastifyPluginAsync } from "fastify";


const healthPlugin: FastifyPluginAsync = async (app) => {
  app.get("/health", async (request, reply) => {
    return {
      status: "OK",
      app: app.config.appName,
      enviroment: app.config.enviroment
    }

  });

  app.get("/hello", async (request, reply) => {
    return {
      message: "Hello from TaskFlow",
    }
  });
}

export default healthPlugin;