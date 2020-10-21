module.exports = function(sequelize, DataTypes) {
  // Add code here to create a Post model
  // This model needs a title, a body, and a category
  // Don't forget to 'return' the post after defining
  const Post = sequelize.define('Post', {
    title: {
      type: DataTypes.STRING
    },
    body: {
      type: DataTypes.TEXT
    },
    catagory: {
      type: DataTypes.STRING
    }
  });
  return Post;
};
