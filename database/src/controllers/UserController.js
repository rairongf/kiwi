const User = require('../models/User');
const now = new Date();
module.exports = {
    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);
    },

    async store(req, res) {
        const { nome,
            email,
            senha,
            dataCadastro,
            endereco } = req.body;

        const user = await User.create({
            nome: nome,
            email: email,
            senha: senha,
            dataCadastro: dataCadastro,
            endereco: endereco
        })

        return res.json(user);
    }
}