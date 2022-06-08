const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

//create Associations
Post.belongsTo(User,  {
    foreignKey:  'user_id',
    onDelete: "cascade"
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'cascade'
  });

User.hasMany(Post,  {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
  });

module.exports = { User, Post, Comment };