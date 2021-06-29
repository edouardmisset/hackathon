const faker = require('faker');
const user = require('../models/user');
// const event = require('../models/event');
const db = require('../db');

const eventNameList = [
  'Focus group on Digital Marketing',
  'Task force Web Assembly',
  'Discussion on the evolution of digital sales',
  'Drinks over best UX parctices',
  'Client fidelity',
  'Love or death of freelance work',
  'Meeting : Career in Tech',
  'Wednesday ruby breakfast',
  'New Hype Event - SECRET',
];

console.log('test');
module.exports = async function seed() {
  await user.create({
    firstName: 'Franck',
    lastName: 'Castle',
    email: 'franck.castle@pun.ish',
    password: 'hello',
  });

  await db.event.createMany({
    data: eventNameList.map((eventName) => ({
      name: eventName,
      description: faker.lorem.paragraph(),
      online: faker.datatype.boolean(),
      date: faker.date.soon(),
      duration: parseInt((Math.random() + 30) * 8, 10),
      image: faker.image.business(),
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
