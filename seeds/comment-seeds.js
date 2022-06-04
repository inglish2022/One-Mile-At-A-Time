const { Comment } = require('../models');

const commentData = [{
        comment_text: "Please Help Me",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Understand this",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Before this project is due",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;