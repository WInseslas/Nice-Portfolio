const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
    * Helper method for defining associations.
    * This method is not a part of Sequelize lifecycle.
    * The `models/index` file will call this method automatically.
    */
    static associate(models) { }
  }

  Message.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "name is a required property" },
          notEmpty: { msg: "name cannot be empty" },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: { msg: "Your email address must be valid" },
          notNull: { msg: "Email is a required property" },
          notEmpty: { msg: "Email cannot be empty" },
        },
      },
      subject: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: { msg: "Message is a required property" },
          notEmpty: { msg: "Message cannot be empty" },
        },
      },
      date_sent: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      is_read: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: 'messages',
      timestamps: true,
      createdAt: false,
      updatedAt: false,
    }
  )

  return Message
}
