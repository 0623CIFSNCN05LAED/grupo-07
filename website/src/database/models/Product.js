module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        creation_date: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        on_sale: {
            type: dataTypes.BOOLEAN,
            allowNull: false
        },
        new: {
            type: dataTypes.BOOLEAN,
            allowNull: false
        },
        featured: {
            type: dataTypes.BOOLEAN,
            allowNull: false
        },
        img: {
            type: dataTypes.STRING(255),
            allowNull: false
        }
    };
    let config = {
        timestamps: false,
        tableName: 'products'
    }
    const Product = sequelize.define(alias,cols,config);

    Product.associate = function (models) {
        Product.belongsTo(models.Technique, {
            as: "technique",
            foreignKey: "technique_id"
        })

        Product.belongsTo(models.Artist, {
            as: "artist",
            foreignKey: 'artist_id',
        })
    }
    return Product
};