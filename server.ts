import app from "./app.js"

try {
  await app.ready(); app.ready() //дожидается выполнения зарегистрированных плагинов
  //В app.ts у тебя примерно такая последовательность:
  //
  // const app = Fastify();
  //
  // app.register(configPlugin);
  //
  // export default app;
  //
  // Метод app.register() регистрирует плагин для выполнения в процессе инициализации Fastify. Он не обязательно выполняет тело плагина немедленно.
  await app.listen({
    port: app.config.port
  });
} catch (e) {
  app.log.error(e);
  process.exit(1);
}
