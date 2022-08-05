const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment')

User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'casecade'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'casecade'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'casecade'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'casecade'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'casecade'
});

module.exports = { User, Post, Comment };
