//modulo para validação de dados
module.exports = app => {

    //funcao para verficar a existencia de dados 
    function existsOrError(value, msg) {
        //valor não setado msg de erro
        if(!value) throw msg
        //verifica se o objeto é um array && e se possui elementos no array  erro
        if(Array.isArray(value) && value.length === 0) throw msg
        // tipo deve ser um string e diferente de espaço erro
        if(typeof value === 'string' && !value.trim()) throw msg
    }
    //funcao  para verificar se o elemento existe e se existir chama a funcao para ver se o valor esta correto
    function notExistsOrError(value, msg) {
        try {
            existsOrError(value, msg)
        } catch(msg) {
            return
        }
        throw msg
    }
    //verificação se dados foram digitados corretamente(caso senha e confirmação de senha)
    function equalsOrError(valueA, valueB, msg) {
        if(valueA !== valueB) throw msg
    }

    return { existsOrError, notExistsOrError, equalsOrError }
}