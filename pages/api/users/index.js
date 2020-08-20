const User = require('../../../database/src/models/User');

require('../../../database/src/data/index');

const buscaTodosUsuarios = async (req,res) => {
  const users = await User.findAll().then( (data) => {
    return data;
  }).catch(err => {
    return err;
  })

  return res.json(users);
}

export default buscaTodosUsuarios;