const User = require('../../database/src/models/User');

require('../../database/src/data/index');

const cadastro = async (req, res) => {
    const { nome,
        email,
        senha,
        endereco
    } = req.body;

    const user = await User.create({
        nome: nome,
        email: email,
        senha: senha,
        endereco: endereco
    })

    return res.json({ user });
}

export default cadastro;
