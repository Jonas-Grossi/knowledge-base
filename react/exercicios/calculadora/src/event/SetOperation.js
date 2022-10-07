


export const  setOperation = (operation)=>{
    //se o valor atual do current for = a 0  o estado vai receber o operador, valor current vai para 1 
    //e o clearDisplay verdadeiro
            if (this.state.current === 0) {
    
                this.setState({ operation, current: 1, clearDisplay: true })
            } 
            //se o valor de current for != 0 ,equals recebe operador se ele for o valor =
            else {
                const equals = operation === '='
                //const currentOperation vai receber o valor do operation
                const currentOperation = this.state.operation
               //values vai receber o array de values
                const values = [...this.state.values]
                //trocar eval por case  
                try {
                    values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
                    if (isNaN(values[0]) || !isFinite(values[0])) {
                        this.clearMemory()
                        return
                    }
                } catch (e) {
                    values[1] = 0
                }
                this.setState({
                    displayValue: values[0],
                    operation: equals ? null : operation,
                    current: equals ? 0 : 1,
                    clearDisplay: !equals,
                    values
    
                })
    
            }
        }