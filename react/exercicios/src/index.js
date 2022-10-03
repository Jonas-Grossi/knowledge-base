//importando react
import React from 'react'
//importando reactdom para manipular a dom
import ReactDOM from 'react-dom'
//import Primeiro from './components/Primeiro'
import BomDia from './components/BomDia'
//estou acessando as variaveis dentro de multiplos por isso tenho que usa {}
// para usar sem precisa do export default

import Saudacao from './components/Saudacao'
//const elemento = <BomDia nome="Guilherme" idade={10}/>
ReactDOM.render(
//instanciando a classe saudacao
    <div>
       <Saudacao tipo ="Bom dia" nome="Joao"/>
    </div>
,document.getElementById('root'))



