const { Model, DataTypes } = require('sequelize');

class Establishment extends Model {
    static init(connection) {
        super.init({
            nome: DataTypes.STRING,
            descricao: DataTypes.STRING,
            lotacao_maxima: DataTypes.INTEGER,
            dataCadastro: DataTypes.DATE,
            endereco: DataTypes.STRING,
        }, {
            sequelize: connection,
        })
    }

    static associate(models) {
        this.hasMany(models.User, {
            foreignKey: 'estabelecimento_id',
            as: 'users'
        });
        this.belongsToMany(models.Establishment, {
            foreignKey: 'estabelecimento_id',
            through: 'user_follows_establishment',
            as: 'users'
        });
    }
}

module.exports = Establishment;