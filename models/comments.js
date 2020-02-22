//sequelize define comments
module.exports = function (sequelize, DataTypes) {
  const Comments = sequelize.define("Comments", {
    user_name: DataTypes.STRING,
    comment: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, { timestamps: false });

  //Associate each comment with a brewery
  Comments.associate = function (models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Comments.belongsTo(models.Breweries, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Comments;
};
