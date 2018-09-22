const jsonServer = require("json-server");
const schema = require("./schema");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router(schema);
const middlewares = jsonServer.defaults();

router.render = (req, res) => {
  // res.setHeader("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Origin", "*");
  res.json({
    code: 200,
    msg: "success",
    data: res.locals.data,
    total: res.locals.data.length
  });
};

server.use(cors());
server.use(router);
server.use(middlewares);
server.listen(3000, () => {
  console.log("mock server is starting!");
});
