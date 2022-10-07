import React from "react";
import './Display.css'
//classe display onde serao exibidos os valores,
// a propriedade props.values vai receber os valores para serem exibidos
export default props =>
<div className="display">{props.value}</div>

    
