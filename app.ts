import Fastify from "fastify";

import configPlugin from "./plugins/config.js";
import healthPlugin from "./routes/health.js";

const app = Fastify({
    logger: true
});

app.register(configPlugin);
app.register(healthPlugin);

export default app;