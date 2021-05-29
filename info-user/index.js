
function start(){
    var txt = window.document.getElementById('info')
    var img = document.getElementById('body')
    var data = new Date()
    var hora = data.getHours() 
    var min = data.getMinutes()
if(hora >= 0 && hora <= 6){
    txt.innerHTML = `Já são ${hora}:${min} <br/> Boa madrugada`
    img.background = 'https://www.aluralingua.com.br/artigos/assets/night.jpg'
}
else if(hora >= 6 && hora <= 12){
    txt.innerHTML = `Já são ${hora}:${min} <br/> Bom dia`
    img.background = 'https://i.pinimg.com/originals/21/6e/d5/216ed5c0bdeb0a15dd5b0cde85fe5eca.jpg'
}
else if(hora >= 12 && hora <= 18){
    txt.innerHTML = `Já são ${hora}:${min} <br/> Boa Tarde`
    img.background = 'https://images.unsplash.com/photo-1472120435266-53107fd0c44a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZXZlbmluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
}
else {
    txt.innerHTML = `Já são ${hora}:${min} <br/> Boa Noite`
    img.background = 'https://www.aluralingua.com.br/artigos/assets/night.jpg'
}

}
function concluir(){
    document.getElementById('ok').style.display = 'none'
    document.getElementById('notok').style.display = 'block'
    var txtsex = document.getElementById('txtsex')
    var txtgrup = document.getElementById('txtgrup')
    var imgold = document.getElementById('imgold')
    var year = document.getElementById('input')
    var erro =  document.getElementById('erro')
    var data = new Date()
    var ano = data.getFullYear(2021)



    if(year.value.length == 0){
        erro.innerHTML = 'deu ruim!'
    }else{
    var sex = document.getElementsByName('radiu')
    var gen = ''
    var idade = ano - Number(year.value)
    imgold.setAttribute('id' , 'foto')
        if(sex[0].checked){
            gen = 'Homem'
            if( idade < 13){
                txtgrup.innerHTML = 'grupo das crianças '
                imgold.setAttribute ('src' , 'https://cdn-istoe-ssl.akamaized.net/wp-content/uploads/sites/14/2020/08/menino-morto-por-ursos.jpg')
            }
            else if(idade < 18){
                txtgrup.innerHTML = 'grupo dos jovens '

                 imgold.setAttribute ('src' , 'https://image.freepik.com/fotos-gratis/jovem-bonito-etnico-cacheados-homem-olhando-camera_23-2148205520.jpg')
            }
            else if (idade < 65){
                txtgrup.innerHTML = 'grupo dos adultos '

                 imgold.setAttribute ('src' , 'https://segredosdomundo.r7.com/wp-content/uploads/2019/06/ser-adulto-e-ser-bem-sucedido-ou-nao-afinal-o-que-e-ser-adulto-1.jpg')
            }
            else{
                txtgrup.innerHTML = 'grupo dos velhos '

                 imgold.setAttribute ('src' , 'https://static1.purepeople.com.br/articles/0/27/14/00/@/3083873-luciano-huck-surge-mais-velho-em-foto-e-624x600-2.jpg')
            }
        }else if(sex[1].checked){
            gen = 'Mulher'
            if( idade < 13){
                txtgrup.innerHTML = 'grupo das crianças '
                 imgold.setAttribute ('src' , 'https://image.freepik.com/fotos-gratis/retrato-de-uma-menina-de-7-anos_116407-699.jpg')
            }
            else if(idade < 18){
                txtgrup.innerHTML = 'grupo dos jovens '
                 imgold.setAttribute ('src' , 'https://image.freepik.com/fotos-gratis/jovem-mulher-com-um-grande-sorriso_1098-1592.jpg')
            }
            else if (idade < 65){
                txtgrup.innerHTML = 'grupo dos adultos '
                 imgold.setAttribute ('src' , 'https://www.estudarfora.org.br/wp-content/uploads/2018/02/FE-EF-768x512.jpg')
            }
            else{
                txtgrup.innerHTML = 'grupo dos velhos '
                 imgold.setAttribute ('src' , 'https://medias.cnnbrasil.com.br/irma-andree.jpeg?format=JPEG&image=https://mediastorage.cnnbrasil.com.br/IMAGES/00/00/02/25228_08445C4F3078E9E6.jpg&width=804&height=537&resize=CROP')
            }
        }
        txtsex.innerHTML  = `${gen} com ${idade} anos`
    }
}