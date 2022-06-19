const seedPosts = require('./post-seeds');
const seedUsers = require('./user-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
    console.log('\n DATABASE SYNCED');
  
  await seedUsers();
    console.log('\n USERS SEEDED');
  
  await seedPosts();
    console.log('\n POSTS SEEDED');

  await seedComments();
    console.log('\n COMMENTS SEEDED');

  process.exit(0);
};

seedAll();