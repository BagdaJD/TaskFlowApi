import Fastify from "fastify";

import configPlugin from "./plugins/config.js";
import healthPlugin from "./routes/health.js";
import loggerPlugin from "./plugins/requestLogger.js";
import tasksPLugin from "./routes/tasks.js";

const app = Fastify({
    logger: true
});

//сначала глобальные идут, подключенные через fp, поскольку
//у них глобальная область видимости
app.register(configPlugin);
app.register(loggerPlugin);
app.register(tasksPLugin);
app.register(healthPlugin);

export default app;
