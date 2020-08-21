const User = require('../../database/src/models/User');
const now = new Date();

require('../../database/src/data/index');

const validate = async (req, res) => {
    const { email } = req.body;

    const user = await User.findOne({
        where: { email }
    }).then((instance) =>{
        return instance.get();
    }).then((data) => {
        return data;
    }).catch(err => {
        return err;
    });

    return res.json(user);
}

export default validate;
