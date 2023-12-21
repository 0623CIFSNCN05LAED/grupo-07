module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        address: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(255),
            allowNull: false
        }
        
    };
    let config = {
        timestamps: false,
        tableName: 'users'
    }
    const User = sequelize.define(alias,cols,config);

   User.associate = function (models) {
        User.belongsTo(models.Rol, {
            as: "roles",
            foreignKey: "rol_id"
        })

        
    }
    return User
};