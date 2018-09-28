const faker = require("faker");
const { randomPick } = require("./utils");

const notifications = new Array(20).fill().map((_, index) => {
  return {
    id: index,
    title: faker.lorem.sentence(),
    desc: faker.lorem.sentence(),
    type: randomPick(["notice", "message", "todo"]),
    status: randomPick(["nothing", "name"]),
    created_at: faker.date.recent(10)
  };
});

module.exports = notifications;
