const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(connection) {
        super.init({
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
            dataCadastro: DataTypes.DATE,
            horaFila: DataTypes.TIME,
            endereco: DataTypes.STRING,
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
            through: 'usuario_segue_estabelecimento',
            as: 'establishments'
        });
    }
}

module.exports = User;