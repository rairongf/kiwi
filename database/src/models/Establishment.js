const {Model, DataTypes} = require('sequelize');

class Establishment extends Model {
    static init(connection){
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

    static associate(models){

    }
}

module.exports = Establishment;