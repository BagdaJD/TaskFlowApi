import fp from "fastify-plugin";
import {type FastifyPluginAsync } from "fastify";

const configPLugin: FastifyPluginAsync = async (app) => {
 app.decorate("config", {
     port: 3000,
     appName: "TaskFlow",
     enviroment: "development"
   });
}

export default fp(configPLugin);