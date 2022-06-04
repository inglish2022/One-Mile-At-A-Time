const { User } = require('../models');

const userData = [{
        username: 'Inglish',
        password: 'inglish'

    },
    {
        username: 'Kooper',
        password: 'kooper11'
    },
    {
        username: 'Reagan',
        password: 'reagan'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;