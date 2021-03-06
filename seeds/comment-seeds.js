const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 3,
        comment_text: "testing 1"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "testing 2"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "testing 3 "
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;