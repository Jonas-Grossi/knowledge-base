//importando jquery
import $ from 'jquery'
//array de funcoes callbacks que serao chamadas quando o carregamento for bem sucessdido
const loadHtmlSuccessCallbacks = []

export function onLoadHtmlSuccess(callback) {
    //callback nao está incluida nesse array?
    if(!loadHtmlSuccessCallbacks.includes(callback)) {
        //coloque dentro do array a callback
        loadHtmlSuccessCallbacks.push(callback)
    }
}
//vai ler todos atributos q sao wm-include parent é a tag que tem a propriedade wm-include
function loadIncludes(parent) {
   //se o parametro vier vazio vai ser setado como body e ser procurado no body inteiro
    if(!parent) parent = 'body'
    //colocando o parent dentro do jquery para ter as funcionalidades dele
    //find(procure dentro de parente os elementos que possui a propriedade wm-include)
    $(parent).find('[wm-include]').each(function(i, e) {
        //url vai receber o proprio elemento pegando o atributo wm-include como o elemento nao
        // esta envolvido por wrap tem que colocar ele dentro da funcao $(e) para conseguir acessa as propriedades
        const url = $(e).attr('wm-include')
        //com a url vamos fazer uma chamada ajax
        $.ajax({
            //passando como parametro a url
            url,
            //funcao callback que eu quero que seja chamada quando for bem sucessida
            success(data) {
                //pegar o elemento atual e chamar a funcao html e setar o data dentro de html
                $(e).html(data)
                //excluir essa propriedade para que nao nenhuma nova interpredada novamente
                $(e).removeAttr('wm-include')
                //vai invocar as callbacks passando o atributo data
                loadHtmlSuccessCallbacks.forEach(
                    callback => callback(data))
                    //chamar novamenteo loadIncludes pois essa funcao e recursiva
                loadIncludes(e)
            }
        })
    })
}
//invcando a funcao passando vazio, com isso ela ira chamar o body
loadIncludes()