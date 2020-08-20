const User = require('../../database/src/models/User');
const now = new Date();

require('../../database/src/data/index');

const validate = async (req, res) => {
    const { email } = req.body;

    const ans = await User.findOne({ where: {email}});

    const ansRet = {
        login: ans.email,
        senha: ans.senha
    }

    return res.json(ansRet);
}

export default validate;
