//operador ...rest(juntar)/spread(espalhar)
//usar rest com paremetro de funcao

//usar spread com objeto
const funcionario ={nome:'Maria',salario:123456.99}
const clone = {ativo:true, ...funcionario}
console.log(clone)

//usar spread com array
const grupoA =['Joao','Pedro','Gloria']
const grupoB =['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)