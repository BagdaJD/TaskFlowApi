import Fastify from "fastify"
import app from "../app.js"

function getHealth(app: Fastify.FastifyInstance) {
  app.get('/health', (request, reply) => {
    return {
      status: "ok",
      app: "TaskFlow"
    }
  });
}

app.register(getHealth);