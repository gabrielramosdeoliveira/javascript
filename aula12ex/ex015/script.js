function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value == 0 || fano.value > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `idade calculada: ${idade}`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'obebe.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'ojovem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'oadulto.jpg')
            } else {
                img.setAttribute('src', 'oidoso.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'abebe.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'avjovem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'ajovem.jpg')
            } else {
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com 0${idade} anos.`
        res.appendChild(img)
    }
}