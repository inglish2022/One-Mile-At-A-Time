const { Post } = require('../models');

const postData = [{
        title: 'Project 1',
        content: 'I think we did okay on it, waiting for grade',
        user_id: 1

    },
    {
        title: 'MVC',
        content: 'Is the most aggravating lesson.',
        user_id: 2
    },
    {
        title: 'Project 3',
        content: 'Is stressing me out',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;