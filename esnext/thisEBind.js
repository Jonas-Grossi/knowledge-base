const pessoa = {
    nome: 'Dharuan',
    falar(){
        console.log('Meu nome é: '.concat(this.nome))
    }
}
const pessoa2 = {
    nome: 'João',
    dizer: pessoa.falar//irá utiliza o mesmo método de execução de pessoa, logo o this referenciado por pessoa sera nome desse
}
pessoa.falar()//>> output será: Dharuan
pessoa2.dizer()//>> output será: João
// Mas ao usar o bind
const pessoa3 = {
    nome: 'Carlos',
    falando: pessoa.falar.bind(pessoa)// nesse caso, estou dizendo que pessoa é a owner dessa função, logo
}
pessoa3.falando()//>> output será: Dharuan