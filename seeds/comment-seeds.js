const { Comment } = require('../models');

const commentData = [{
        comment_text: "The people are so friendly here!!",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "This waterpark is the best for its price.",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Skiing went well, we had so much fun!!",
        user_id: 3,
        post_id: 3
    },
    {
        comment_text: "I would love to go back here someday with my family",
        user_id: 4,
        post_id: 4
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;