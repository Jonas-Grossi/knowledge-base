import React from "react"
import './Button.css'
//componente funcional sem estado
export default props =>{
  //expressao para classificar propriedades de aplicacao de classes
  //button sempre sera aplicado
  //as demais serao aplicadas conforme  a subclasse se nao aplica vazio
  //se a propriedade operation for passado vai aplicar as classes 
    let classes = 'button '
    // += esta concatenando se condicao for validada
    classes += props.operation ? 'operation' :''
    classes += props.double ? 'double' :''
    classes += props.triple ? 'triple' :''
return(
  //botao vai receber uma propriedade props.label de calculator.jsx
  //quando clickar em o botao 
    <button 
    //recebe evento ao clickar no botao e vai chamar o props.click que vai receber o conteudo de props.label
    onClick={e=>props.click(props.label)}
   //recebe classes definidas acima
   className={classes} >
      
      {props.label}
    </button>

)
}
  

