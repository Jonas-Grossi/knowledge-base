const escola = "Cod3r";
console.log(escola.charAt(4));
console.log(escola.charAt(5));//nao tem letra logo retorna vazio
console.log(escola.charCodeAt(3));//valor na tabela unicode 

console.log(escola.indexOf('d'));//procura a posicao do valor desejado na string
console.log(escola.substring(1, 3));

console.log('Escola'.concat(escola).concat("!"));//concatenar a palavra escola com a string escola
console.log(escola.replace(3,'e'));
console.log('Ana,Maria,Pedro'.split('p'));
