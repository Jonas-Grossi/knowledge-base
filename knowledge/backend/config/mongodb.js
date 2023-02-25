//atribuindo a lib mongoose a const
const mongoose = require('mongoose')
//comando para conexao e o caminho do app e useNewUrlParser para nao gerar advertencias
mongoose.connect('mongodb://localhost/knowledge_stats', { useNewUrlParser: true })
    //erro se nao conseguir conectar
    .catch(e => {
        const msg = 'ERRO! Não foi possível conectar com o MongoDB!'
        console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
    })