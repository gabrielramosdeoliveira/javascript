function contar() {
    let ini = document.getElementById("ini")
    let fim = document.getElementById('fim')
    let passo = document.getElementById('pas')
    let res = document.getElementById('res')

    if (ini.value == 0 || fim.value == 0 || passo.value == 0 ) {
        window.alert('[ERRO] faltam dados!')
    } else {
        res.innerHTML = 'Contando:  '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (i < f) {
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}