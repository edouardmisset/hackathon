const faker = require('faker');
const user = require('../models/user');
const event = require('../models/event');
const db = require('../db');

module.exports = async function seed() {
  try {
    await user.create({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: 'hello',
    });

    await event.createMany({
      numberOfEvents: 10,
      name: faker.name.firstName(),
      description: faker.name.jobDescriptor(),
      online: faker.datatype.boolean(),
      date: faker.datatype.datetime(),
      duration: faker.datatype.number(),
      image: faker.image.image(),
      location: faker.address.city(),
      ownerId: 1,
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await db.$disconnect();
  }
};
module.exports();

// npx prisma migrate dev
// npx prisma db seed --preview-feature
// npx prisma migrate reset
