module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define('userDetails', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: true
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: true
        },
        mobilenumber: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        }, category: {
            type: DataTypes.STRING,
            allowNull: true
        },
    }, {
        freezeTableName: true
    });
  
    return user;
  }