const {Model, DataTypes} = require('sequelize');

class User extends Model {
    static init(connection){
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

    static associate(models){

    }
}

module.exports = User;