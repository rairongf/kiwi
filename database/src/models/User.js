const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(connection) {
        super.init({
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
            dataCadastro: DataTypes.DATE,
            horaFila: DataTypes.TIME,
            cidade: DataTypes.STRING,
            bairro: DataTypes.STRING,
            rua: DataTypes.STRING,
            numero: DataTypes.STRING,
        }, {
            sequelize: connection,
        })
    }

    static associate(models) {
        this.belongsTo(models.Establishment, {
            foreignKey: 'estabelecimento_id',
            as: 'users'
        });
        this.belongsToMany(models.Establishment, {
            foreignKey: 'usuario_id',
            through: 'user_follows_establishment',
            as: 'establishments_users'
        });
    }
}

module.exports = User;