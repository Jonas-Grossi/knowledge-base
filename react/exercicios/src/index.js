import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './components/Pai'
import Filho from './components/Filho'


ReactDOM.render(

    <div>
        <Pai nome="Paulo " sobrenome="Silva" >
        <Filho nome="Pedro" />
        <Filho nome="Carla " />
        <Filho nome="Paulo"  />

</Pai>
    </div>
    , document.getElementById('root'))



