//precisa de ter node-schedule instalado
// */5 de 5 em 5 segundos
//*qualquer minuto
//12 horas
//* qualquer dia do mes
//* qualquer mes
//2 terça feira(0=domingo,1=segunda-feira,2=terca feira)
const tarefa1 = schedule.scheduleJob('*/5 * 12 ** 2',function(){
    console.log('Executando Tarefa 1!',new Date().getSeconds())
})

setTimeout(function (){
tarefa1.cancel()
console.log('Cancelando Tarefa 1!')
},2000)
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.range(1,5)]
regra.hour = 12
regra.second = 30

const tarefa2 =  schedule.scheduleJob(regra,function(){
console.log('Executando Tarefa 2!',new Data().getSeconds())
})