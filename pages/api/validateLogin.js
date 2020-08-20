const User = require('../../database/src/models/User');

require('../../database/src/data/index');

const validateEmail = async (req, res) => {

    const { email } = req.body;
    console.log(email);


    const user = await User.findOne({ where: { email:email } })

    const retorno = {
        login: user.email,
        senha: user.senha
    }

    console.log(JSON.stringify(retorno))

    return res.json(retorno);
}

export default validateEmail;
