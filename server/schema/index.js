const notifications = require("./notifications");
const cards = require("./cards");

const login = {
  name: "Zen",
  avatar: "https://i.loli.net/2017/08/21/599a521472424.jpg"
};

module.exports = {
  cards,
  notifications,
  login,
  card: cards // TODO: 兼容之前的接口, restful 建议复数形式, 合适的时机移除
};
