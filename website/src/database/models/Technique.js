module.exports = (sequelize, dataTypes) => {
    let alias = 'Technique';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: dataTypes.STRING(255),
            allowNull: false
        }
    };
    let config = {
        timestamps: false,
        tableName: 'techniques'
    }
    const Technique = sequelize.define(alias,cols,config);

    Technique.associate = function (models) {
        Technique.hasMany(models.Product, {
            as: "products",
            foreignKey: "technique_id"
        })
    }
    return Technique
};