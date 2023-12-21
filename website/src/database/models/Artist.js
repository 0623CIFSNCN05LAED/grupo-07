module.exports = (sequelize, dataTypes) => {
    let alias = 'Artist';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        nacionality: {
            type: dataTypes.STRING(255),
            allowNull: false
        }
    };
    let config = {
        timestamps: false,
        tableName: 'artists'
    }
    const Artist = sequelize.define(alias,cols,config);

    Artist.associate = function (models) {
        Artist.hasMany(models.Product, {
            as: "products",
            foreignKey: "artist_id",
        })
    }
    return Artist
};