const faker = require('faker');
const user = require('../models/user');
// const event = require('../models/event');
const db = require('../db');

console.log('test');
module.exports = async function seed() {
  await user.create({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: 'hello',
  });

  await db.event.createMany({
    data: Array(10)
      .fill(null)
      .map(() => ({
        name: faker.name.firstName(),
        description: faker.name.jobDescriptor(),
        online: faker.datatype.boolean(),
        date: faker.datatype.datetime(),
        duration: faker.datatype.number(),
        image: faker.image.image(),
        location: faker.address.city(),
        popularity: parseInt(Math.random() * 1000, 10),
        ownerId: 1,
      })),
  });
};

module
  .exports()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });

// npx prisma migrate dev
// npx prisma db seed --preview-feature
// npx prisma migrate reset
