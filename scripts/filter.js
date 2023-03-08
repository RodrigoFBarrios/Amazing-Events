function captureData() {
    let texto = document.getElementById('id_search').value
    let checks = eventos.from(document.querySelectorAll('.class_checks:checked')).map(each => each.value)
    let filtro = eventos.filter(each => {
        return (each.nombre.includes(texto)) && (checks.length === 0 || checks.includes(each.tipo))
    })
   
    console.log(filtro)
    if (filtro.length>0) {
        printCards('#card_conteiner',filtro)
    } else {
        notFound('#card_conteiner')
    }
}