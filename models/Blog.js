const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Blog extends Model {}

Blog.init(
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
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
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
    modelName: 'blog',
  }
);

module.exports = Blog;
