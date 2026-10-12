import "fastify";
declare module "fastify" {
    interface FastifyInstance {
        config: {
            port: number;
            appName: string;
            enviroment: string;
        };
    }
}