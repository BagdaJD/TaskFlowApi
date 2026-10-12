import { type FastifyPluginAsync } from "fastify";
import fp from "fastify-plugin"

const loggerPlugin: FastifyPluginAsync = async (app) => {
  app.addHook("onRequest", async (request) => {
      //"onRequest" - для логирвоания инфы
      console.log(`[REQUEST] ${request.method} ${request.url}`)
    });
}


export default fp(loggerPlugin);
