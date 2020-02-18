//sequelize define breweries
module.exports = function (sequelize, DataTypes) {
  const Breweries = sequelize.define("breweries", {
    brewery_name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    postal_code: DataTypes.STRING
  });

  //Associate the brewery with many comments
  Breweries.associate = function (models) {
    // Associating brewery with comments
    // When an brewery is deleted, also delete any associated comments
    Author.hasMany(models.Comments, {
      onDelete: "cascade"
    });

    return Breweries;
  }
};