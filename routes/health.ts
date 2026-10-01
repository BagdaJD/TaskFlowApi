import {type FastifyPluginAsync } from "fastify";


const healthPlugin: FastifyPluginAsync = async (app) => {
  app.get("/health", async (request, reply) => {
    return {
      status: "OK",
      app: app.config.appName
    }
  });
}

export default healthPlugin;