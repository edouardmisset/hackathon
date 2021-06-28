const faker = require('faker');
const db = require('../db');


module.exports = async function seed() {
  await db.event.createMany(
    {
      data: Array(10)
        .fill(null)
        .map(() => ({
          name: faker.name.firstName(),
          description: faker.name.jobDescriptor(),
          online: faker.datatype.boolean(),
          date: faker.datatype.datetime(),
          duration: faker.datatype.number(),
          image: faker.image.image(),
          location: faker.address.city()

        }))
    })
}
module
  .exports()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });