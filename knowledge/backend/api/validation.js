//funcoes para verificação de erros e exportando para usos externos
module.exports = app =>{
//valor existe ou error atraves da msg
function existsOrError(value, msg) {
    //se nao for um valor msg de erro
    if (!value) throw msg
    //se o array estiver vazio ou nao for um array msg de erro
    if (Array.isArray(value) && value.length === 0) throw msg
    //se o tipo de value for igual uma string e nao  vazio
    if (typeof value === 'string' && !value.trim()) throw msg
}
//nao existe ou erro passando valor e msg
function notExistsOrError(value, msg) {
    //tente 
    try {
        existsOrError(value, msg)
    }//erro se o try n funcionar
     catch (msg) {
//parar
        return
    }
    //erro
    throw msg
}
//confirmacao do password
function equalsOrError(valueA,valueB,msg){
    //se a senha nao confere erro
    if(valueA != valueB) throw msg



}
//retornando as funcoes para uso externo
return {existsOrError,notExistsOrError,equalsOrError}
}