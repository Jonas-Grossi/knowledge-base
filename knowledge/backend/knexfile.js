//const destructuring recebendo os dadps de conexao com o banco de dados
const { db } = require('./.env')
//exportando o modulo
module.exports = {
	//informando o gerenciador de bd
	client: 'postgresql',
	//bd
	connection: db,
	//config padrao
	pool: {
		min: 2,
		max: 10
	},
	//migração para controle de update 
	migrations: {
		tableName: 'knex_migrations'
	}
};
