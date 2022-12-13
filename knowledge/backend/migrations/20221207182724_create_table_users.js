
//mirgration criado atraves da linha de comando pelo terminal 
//para criar as migrations foi usado o comando
//make create_table_users
//make create_table_categories
//make create_table_articles

//alteracoes do banco
exports.up = function(knex, Promise) {
    //cria as tabelas do banco de dados users
    return knex.schema.createTable('users',table=>{
      //id é a chave primaria e autoincrimentada
      table.increments('id').primary()
      //campo nome e nao deve ser nulo
      table.string('name').notNull()
      //campo email ,nao deve ser nulo e deve ser unico
      table.string('email').notNull().unique()
      //cria o campo password e nao deve ser null
      table.string('password').notNull()
      //deixando admin como falso para maioria dos usuarios
      table.boolean('admin').notNull().defaultTo(false)
  
    })
  
  };
  //down deve ser ao contrario de up
  exports.down = function(knex, Promise) {
    //dropa a tabela com os dados de up
      return knex.schema.dropTable('users')
  
  
  };
  