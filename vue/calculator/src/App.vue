<template>
  <div id="app">
<h1>Calculadora</h1>
<CalculatorMain />

  </div>
 
</template>

<script>

import CalculatorMain from '../src/main/CalculatorMain';
export default {
 components:{CalculatorMain}
  
}
</script>

<style>
@font-face{
  font-family: "RobotoMono";
  src: url("./fonts/RobotoMono-Thin.ttf")
}
*{
  font-family: "RobotoMono",monospace;

}

  body{
    margin:0;

  }
#app{
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  color: #fff;
  background:linear-gradient(to right, rgb(83,105,118),rgb(41,46,73) ) ;
}

</style>
