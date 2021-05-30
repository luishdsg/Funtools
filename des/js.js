    let input = document.getElementById('input')
    let lista = document.getElementById('flista')
    let res = document.getElementById('res')
    let erro = document.getElementById('erro')
    let valores = []
function isNum(n){
    if(Number(n) >= 1 && Number(n) <= 1000){
        return true
    }else{
        return false
    }
}
function inList(n , l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    } 
}
function calcular(){
 if( isNum(input.value) && !inList(input.value, valores)){
     valores.push(Number(input.value))
     let item = document.createElement('option')
     item.text = `Número ${input.value} adiconado`
     lista.appendChild(item)
     res.innerHTML = ''
 }else{
     erro.innerHTML = 'valor invalido ou não encontrado na lista!'
 }
 input.value = ''
 input.focus()
      
}


function resultado(){
    if(valores.length == 0){
        erro.innerHTML = "adicione algum numero antes de calcular"
    }else{
       let total = valores.length
       let maiorn = valores[0]
       let menorn = valores[0]
       let soman = 0
       let median = 0
       for(let oz in valores){
           soman += valores[oz]
        
           if(valores[oz] > maiorn){
               maiorn = valores[oz]
           }
           if(valores[oz] < menorn)
           menorn = valores[oz]
       }
    median = soman / total 
       res.innerHTML = ''
       res.innerHTML += `<p> ${total} números cadastrados </p>`
       res.innerHTML += `<p> maior número digitado ${maiorn}</p>`
       res.innerHTML += `<p> menor número digitado ${menorn} </p>`
     res.innerHTML += `<p> soma dos números ${soman} </p>`
        res.innerHTML += `<p> média dos números   ${median}</p>`
       /* res.innerHTML += `<p> ${total} números cadastrados </p>`
       res.innerHTML += `<p> ${total} números cadastrados </p>`
       res.innerHTML += `<p> ${total} números cadastrados </p>`
       res.innerHTML += `<p> ${total} números cadastrados </p>`
*/
let num = 8
num **=2
console.log(num)
    }
}