const User = require('../../database/src/models/User');
const now = new Date();

require('../../database/src/data/index');

const cadastro = async (req, res) => {
    const { nome,
        email,
        senha,
        //cidade,
        bairro,
        rua,
        numero
    } = req.body;

    const user = await User.create({
        nome: nome,
        email: email,
        senha: senha,
        //cidade: cidade,
        bairro: bairro,
        rua: rua,
        numero: numero
    })

    

    return res.json({ user });
}

export default cadastro;
