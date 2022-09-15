/*Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130*/
let convencional = 100
planoSaude = (idade) =>{
 idade <10 ? console.log(convencional+80) : 
 idade >=10 && idade <=30 ? console.log(convencional+50) : 
 idade >=31 && idade <=60 ? console.log(convencional+95) :
 idade >=61 ? console.log(convencional + 130) : console.log('Digite um Valor valido')

}
planoSaude()
