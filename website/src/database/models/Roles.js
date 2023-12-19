module.exports = (sequelize, dataTypes) => {
    let alias = 'Rol';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
      
        
    };
    let config = {
        timestamps: false,
        tableName: 'roles'
    }
    const Rol = sequelize.define(alias,cols,config);

   Rol.associate = function (models) {
        Rol.hasOne(models.User, {
            as: "users",
            foreignKey: "id"
        })

        
    }
    return Rol
};