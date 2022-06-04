const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

//create Associations
Post.belongsTo(User,  {
    foreignKey:  'userId',
    onDelete: "cascade"
});

Post.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'cascade'
  });

User.hasMany(Post,  {
    foreignKey: 'userId'
});

Comment.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'cascade'
  });

module.exports = { User, Post, Comment };