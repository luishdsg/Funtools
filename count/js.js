function calcular(){
    var primeiro = document.getElementById('primeiro')
    var ultimo = document.getElementById('ultimo')
    var pulador = document.getElementById("pulador")
    var erro = document.getElementById('erro')
    var txt = document.getElementById('text')
    if(primeiro.value.length == 0 || ultimo.value.length == 0 || pulador.value.length == 0){
        erro.innerHTML = 'preencha todos os campos!'
    }else{
        let pri = Number(primeiro.value)
        let ult = Number (ultimo.value)
        let pul = Number(pulador.value)
        if( pul <= 0){
        erro.innerHTML = 'pulador invalido!'
        pul = 1
        }
    if(pri < ult){
        for(let c = pri; c <= ult; c += pul){
            txt.innerHTML += `${c} , `
        }
    }else{
    for(let k = pri; k >= ult; k -= pul){
        txt.innerHTML += `${k} , `
    }
}
 txt.innerHTML += 'fim!'

      
      }
}