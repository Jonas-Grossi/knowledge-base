import React from "react";
//quando usa export default so aceita funcao anonima, ou seja nao aceita variavel
export const BoaTarde = props => <h1>Boa tarde {props.nome}!</h1>
export const BoaNoite = props => <h1>Boa noite {props.nome}!</h1>
export default BoaTarde
