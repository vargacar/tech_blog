const User = require ('./User');
const Post = require ('./Post')


User.hasMany(Post,{
    foreignKey: 'user_id'
})

Post.belongsTo(User,{
    foreignKey: 'user_id',
    onDelete: 'cascade'
})



module.exports = {User, Post}
