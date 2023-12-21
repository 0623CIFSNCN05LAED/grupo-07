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
        Rol.hasMany(models.User, {
            as: "users",
            foreignKey: "rol_id"
        })

        
    }
    return Rol
};