const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    blog_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'blog',
        key: 'id',
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    bufferData: {
      type: DataTypes.BLOB,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: false,
    modelName: 'post',
  }
);

module.exports = Post;
