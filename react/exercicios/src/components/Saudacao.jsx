//poderia usar react.component
import React, { Component } from "react";
//extends herda de component 
export default class Saudacao extends Component {
    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }
constructor(props){
    super(props)
   this.setTipo = this.setTipo.bind(this)

}

    setTipo(e) {
        //funcao para alterar o estado
        this.setState({ tipo: e.target.value })

    }
    setNome(e) {
        //funcao para alterar o estado

        this.setState({ nome: e.target.value })
    }
    //renderiza o componente é como o main 
    render() {
        //esta tirando tipo e nome de dentro de props
        //o operador destructure serve para tirar 
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..."
                    value={tipo}
                    //em react para o input precisa ter a funcao onchange para ser alterado
                    onChange={this.setTipo} />
                <input type="text" placeholder="Nome..." value={nome}
                    onChange={e => this.setNome(e)} />
            </div>
        )
    }

}

