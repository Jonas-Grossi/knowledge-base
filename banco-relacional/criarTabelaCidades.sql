/*criar tabela cidades se ela nao existir */
create table if not exists cidades(
    /*id auto incrementado e sem sinal nao pode ser vazio*/
    id int unsigned not null auto_increment,
    /**/
    nome varchar(255) not null,
    /*criar nome de até 255 caracteres nao vazio*/
    estado_id int unsigned not null,
    /*area em 10 casas deciamis e 2 digitos apos o ponto flutuante*/
    area decimal(10,2),
   /*definir id como chave primaria*/
    primary key (id),
    /*definir estados_id como chave estrangeira da tabela estados e a referencia é o id*/
    foreign key (estado_id) references estados (id)

);