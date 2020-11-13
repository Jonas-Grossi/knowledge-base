var numero = 1;
{ //ignora o bloco pois nao e uma funcao
    var numero = 2;
    console.log('dentro =', numero);
}
console.log('fora =',numero);

//esse comportamento nao acorre com let