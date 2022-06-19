const { Post } = require('../models');

const postData = [
    {
        title: "Test post 1",
        post_content: "test post 1 content",
        user_id: 3
    },
    {
        title: "Test post 2",
        post_content: "test post 2 content",
        user_id: 1
    },
    {
        title: "Test post 3",
        post_content: "test post 3 content",
        user_id: 2
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;