const User = require('../../../database/src/models/User');

require('../../../database/src/data/index');

const buscaDadosUsuario = async (req, res) => {
  const { login } = req.query;
  const senhaDigitada = req.body.senha;
  var senhaBuscada

  await User.findOne({where: {email: login}}).then( (instance) => {
    if(instance != null)
      return instance.get();
    else {
      return res.status(404).json({error: 'Email incorreto\nPor favor, digite o email novamente' } )
    }
  }).then(data => {
    senhaBuscada = data.senha;
    return data;
  }).catch(err => {
    return err;
  })

  if(senhaDigitada == senhaBuscada){
    return res.status(200).json({success: 'Login realizado!\nSeja bem-vindo!' } )
  }
  else{
    return res.status(404).json({error: 'Senha incorreta\nPor favor, digite a senha novamente' } )
  }
}

export default buscaDadosUsuario;