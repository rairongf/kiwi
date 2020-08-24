const Establishment = require('../../../database/src/models/Establishment');

require('../../../database/src/data/index');

const buscaDadosEstabelecimento = async (req, res) => {
  const { id } = req.query;

  await Establishment.findOne({where: {id: id}}).then( (instance) => {
    if(instance != null)
      return instance.get();
    else {
      return res.status(404).json({error: 'Estabelecimento não encontrado\nPor favor, tente novamente' } )
    }
  }).then(data => {
    return data;
  }).catch(err => {
    return err;
  })

  return res.status(200).json({success: 'Estabelecimento encontrado!' } )
}

export default buscaDadosEstabelecimento;