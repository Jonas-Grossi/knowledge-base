//config recebe o arquivo  knex que recebe os dados de acesso ao banco e tipos de interacao
const config = require('../knexfile.js')
//knex importa as config(dados de acesso)
const knex = require('knex')(config)
//comando de update de down recebendo o array de dados de config
knex.migrate.latest([config])
//exporta o knex
module.exports = knex