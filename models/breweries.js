//sequelize define breweries
module.exports = function (sequelize, DataTypes) {
  const Breweries = sequelize.define("Breweries", {
    brewery_name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    postal_code: DataTypes.STRING
  }, { timestamps: false });

  //Associate the brewery with many comments
  Breweries.associate = function (models) {
    // Associating brewery with comments
    // When an brewery is deleted, also delete any associated comments
    Breweries.hasMany(models.Comments, {
      onDelete: "cascade"
    });
  };

  return Breweries;
};