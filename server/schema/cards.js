const faker = require("faker");
const { randomPick } = require("./utils");

const cards = new Array(100).fill({}).map((_, i) => ({
  id: i,
  title: faker.lorem.sentences(),
  thumbnail: faker.image.cats() + `?ts=${Date.now()}`,
  content: faker.lorem.paragraph(),
  desc: faker.lorem.sentence(),
  updated_at: faker.date.recent(),
  status: randomPick(["running", "auditing", "deleted"]),
  author: faker.name.title(),
  created_at: faker.date.recent(3)
}));

module.exports = cards;
