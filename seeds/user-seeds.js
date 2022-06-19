const { User } = require('../models');

const userData = [
    {
        username: "test1",
        email: "testmail1@gmail.com",
        password: "password123"
    },
    {
        username: "test2",
        email: "testmail2@gmail.com",
        password: "password123"
    },
    {
        username: "test3",
        email: "testmail3@gmail.com",
        password: "password123"
    }
   
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;