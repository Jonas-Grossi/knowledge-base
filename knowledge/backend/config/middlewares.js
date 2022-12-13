//importando body-parser
const bodyParser = require('body-parser')
//permite acessar a api de uma origem diferente
const cors = require('cors')


//module.exports recebe app
module.exports= app =>{
    //todas metodos de entrada passando um parser tranformando em json
    app.use(bodyParser.json())
    //liberando acesso a origens diferentes
    app.use(cors())

}

