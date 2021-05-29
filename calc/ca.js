   var erro = document.getElementById('erro')
   var input = document.getElementById('numero')
   let txta = document.getElementById('txta')
   let txts = document.getElementById('txts')
   let txtm = document.getElementById('txtm')
   let txtd = document.getElementById('txtd')

    function ca() {
        document.getElementById('txts').style.display= 'none'
        document.getElementById('txtm').style.display= 'none'
        document.getElementById('txtd').style.display= 'none'
        document.getElementById('txta').style.display= 'block'
        if (input.value.length == 0) {
            erro.innerHTML = 'escolha um numero!';
        } else {
            let calca = Number(input.value)
            for(  let c = 1; c <= 100;  c++){
                let textoa = document.createElement('option')
                textoa.text = `${calca} + ${c} = ${calca+c}`
                txta.appendChild(textoa)              
            }
        }
    }
    function cs() {
        document.getElementById('txta').style.display= 'none'
        document.getElementById('txtm').style.display= 'none'
        document.getElementById('txtd').style.display= 'none'
        document.getElementById('txts').style.display= 'block'
        if (input.value.length == 0) {
            erro.innerHTML = 'escolha um numero!';
        } else {
            let calcs = Number(input.value)
            for(  let c = 1; c <= 100;  c++){
                let textos = document.createElement('option')
                textos.text = `${calcs} - ${c} = ${calcs-c}`
                txts.appendChild(textos)              
            }
        }
    }
    function cm() {
        document.getElementById('txts').style.display= 'none'
        document.getElementById('txta').style.display= 'none'
        document.getElementById('txtd').style.display= 'none'
        document.getElementById('txtm').style.display= 'block'

        if (input.value.length == 0) {
            erro.innerHTML = 'escolha um numero!';
        } else {
            let calcm = Number(input.value)
            for(  let c = 1; c <= 100;  c++){
                let textom = document.createElement('option')
                textom.text = `${calcm} x ${c} = ${calcm*c}`
                txtm.appendChild(textom)              
            }
        }
    }
    function cd() {
        document.getElementById('txts').style.display= 'none'
        document.getElementById('txtm').style.display= 'none'
        document.getElementById('txta').style.display= 'none'
        document.getElementById('txtd').style.display= 'block'

        if (input.value.length == 0) {
            erro.innerHTML = 'escolha um numero!';
        } else {
            let calcd = Number(input.value)
            for(  let c = 1; c <= 100;  c++){
                let textod = document.createElement('option')
                textod.text = `${calcd} ÷ ${c} = ${calcd/c}`
                txtd.appendChild(textod)              
            }
        }
    }        
