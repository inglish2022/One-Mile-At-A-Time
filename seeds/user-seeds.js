const { User } = require('../models');

const userData = [{
        username: 'Inglish',
        password: 'inglish123456'

    },
    {
        username: 'Kooper',
        password: 'kooper123456'
    },
    {
        username: 'Reagan',
        password: 'reagan123456'
    },
    {
        username: 'Logan',
        password: 'logan123456'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;