const Koa = require("koa");
let app = new Koa();

app.use(async ctx => ctx.body = "hello world!");

app.listen(3000);
