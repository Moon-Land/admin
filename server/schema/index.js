const faker = require("faker");

const card = new Array(100).fill({}).map((_, i) => ({
  id: i,
  title: faker.lorem.sentences(),
  thumbnail: faker.image.cats() + `?ts=${Date.now()}`,
  content: faker.lorem.paragraph(),
  desc: faker.lorem.sentence(),
  updated_at: faker.date.recent(),
  status: "reject",
  author: faker.name.title(),
  created_at: faker.date.recent(3)
}));

const collection = new Array(20).fill().map((_, index) => {
  return {
    id: index,
    title: faker.lorem.slug(),
    desc: faker.lorem.sentence(),
    content: faker.lorem.paragraph(),
    created_at: faker.date.recent(3),
    status: "reject"
  };
});

module.exports = {
  card,
  collection
};
