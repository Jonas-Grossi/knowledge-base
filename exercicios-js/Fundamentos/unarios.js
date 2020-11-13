let num1 = 1;
let num2 = 2;
num1++;
console.log(num1);

--num1;
console.log(num1);
console.log(++num1 === num2--);//++ e executado antes da comparacao e o -- foi executado depois da comparacao
console.log(num1 === num2);
