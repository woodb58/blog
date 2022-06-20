const { User } = require('../models');

const userData = [
    {
        username: "test1",
        password: "password123"
    },
    {
        username: "test2",
        password: "password123"
    },
    {
        username: "test3",
        password: "password123"
    }
   
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;