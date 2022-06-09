const { Post } = require('../models');

const postData = [{
        title: 'Ocho Rios, Jamaica',
        content: 'Just flew in today, traveled from Montego Bay to Ocho Rios.  The poverty is crazy.  Beautiful ocean and beaches.',
        user_id: 1

    },
    {
        title: 'Splash Island, Indiana',
        content: 'This place is amazing.  I will never get over all the fun things to do for such little price.  The weather was beautiful and I hope to come back very soon.',
        user_id: 2
    },
    {
        title: 'Colorado',
        content: 'I love this place.  It is so beautiful with the mountains and fresh air. The scenery is unlike anything I have ever seen before.  Going sking tomorrow and I will let you know how it goes!!',
        user_id: 3
    },
    {
        title: 'Busch Gardens Tampa, Florida',
        content: 'This is my first going to this park.  I had so much fun with my 4 closest friends.  The rides were phenomenal and we had great weather and great food.',
        user_id: 4
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;