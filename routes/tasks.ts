import { type FastifyPluginAsync } from "fastify";


const tasksPLugin: FastifyPluginAsync = async (app) => {
  app.get("/tasks", () => {
    return {
      tasks: [],
      app: app.config.appName
    }
  });
}


export default tasksPLugin;