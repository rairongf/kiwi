const Establishment = require('../../database/src/models/Establishment');

require('../../database/src/data/index');

const cadastroEstabelecimento = async (req, res) => {
    

    const { nome,
        descricao,
        lotacao_maxima,
        endereco
    } = req.body;

    const establishment = await Establishment.create({
        nome: nome,
        descricao: descricao,
        lotacao_maxima: lotacao_maxima,
        endereco: endereco
    })

    return res.json({ establishment });
}

export default cadastroEstabelecimento;
