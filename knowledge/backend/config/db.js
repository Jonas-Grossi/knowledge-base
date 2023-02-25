//importando knexfile e atribuindo a uma const
const config = require('../knexfile.js')
//knex recebe query Builder com a configuração em config
const knex = require('knex')(config)
//enviando migraçoes para o banco 
knex.migrate.latest([config])
//exportando knex
module.exports = knex