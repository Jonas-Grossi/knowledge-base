let isAtivo = false;
console.log(isAtivo);
isAtivo = true;
console.log(isAtivo);
isAtivo = 1;
console.log(!!isAtivo);

//Verdadeiros em JS

console.log('os verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'testo');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

//Falsos em JS

console.log('os falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('pra finalizar...');
console.log(!!(''|| null || 0 || ' '));
let nome = ''; //como esta vazio vai imprimir desconhecido.
console.log(nome || 'Desconhecido');