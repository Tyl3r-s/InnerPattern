// const faker = require('faker');
// const userSeeds = require('./userSeed.json');
const entrySeeds = require('./entrySeed.json');
const db = require('../config/connection');
const { Entry, User } = require('../models');

db.once('open', async () => {
  try {
    await Entry.deleteMany({});
    // await User.deleteMany({});

    // await User.create(userSeeds);

    for (let i = 0; i < entrySeeds.length; i++) {
      const { _id, entryAuthor } = await Entry.create(entrySeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: entryAuthor },
        {
          $addToSet: {
            entries: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});