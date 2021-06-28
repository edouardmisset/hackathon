const faker = require('faker');
const db = require('../db');
const user = require('../models/user');
const event = require('../models/event');

module.exports = async function seed() {
  await user.create({
    data: {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    },
  });

  await event.createMany({
    numberOfEvents: 10,
    eventType: 'Web Dev',
    name: faker.name.firstName(),
    description: faker.name.jobDescriptor(),
    online: faker.datatype.boolean(),
    date: faker.datatype.datetime(),
    duration: faker.datatype.number(),
    image: faker.image.image(),
    location: faker.address.city(),
    ownerId: 1,
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
