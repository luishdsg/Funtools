
    function ca(){
     
        var erro = document.getElementById('erro')
        var input = document.getElementById('numero')
    if(input.value.length == 0){
        erro.innerHTML = 'escolha um numero!'
    }else{
        var txta = docuemnt.getElementById('txta')
        var calculaa = docuemnt.getElementById('calcular-adicao')
        let calca = Number(calculaa.value)
        if(calca <= 10){ 
            txta.innerHTML = `${calca} é bom`
        }else{
            txta.innerHTML = `${calca} é ruim`

        }
    }


}