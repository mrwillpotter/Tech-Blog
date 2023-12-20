const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');
const Post = require('./Post');

Blog.belongsTo(User);
User.hasMany(Blog);

Comment.belongsTo(Blog);
Blog.hasMany(Comment);

Comment.belongsTo(User);
User.hasMany(Comment);

Post.belongsToMany(Blog, { through: Post });

module.exports = { User, Event, Comment };
