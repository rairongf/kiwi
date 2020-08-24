const Establishment = require('../../../database/src/models/Establishment');

require('../../../database/src/data/index');

const buscaTodosEstabelecimentos = async (req,res) => {
  const establishments = await Establishment.findAll().then( (data) => {
    return data;
  }).catch(err => {
    return err;
  })

  return res.json(establishments);
}

export default buscaTodosEstabelecimentos;