//O body-parser é pra converter o body da requisição para vários formatos, inclusive json
const bodyParser = require('body-parser')
//permite apartir de uma origem diferente acessar a api
const cors = require('cors')

module.exports = app => {
    //app.use é usada para montar a funcao de middleware convertendo o corpo da req em json
    app.use(bodyParser.json())
    //permite que o servidor responda as solicitaçoes de servidores diferentes
    app.use(cors())
}