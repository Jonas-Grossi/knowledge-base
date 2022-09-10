function Pessoa(){
    this.idade = 0
//quem está disparando e um temporizador e  nao um objeto pessoa
    setInterval(function(){
    this.idade++

        console.log(this.idade)

//para resolver precisa usar o bind
    }.bind(this),1000)

}

new Pessoa