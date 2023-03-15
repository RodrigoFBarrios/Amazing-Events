console.log(data)
const eventos = data.events
let cardsDeEventos = []
let numero = 3
let ancho = `20rem`
for (let evento of eventos) {
  let card = `<div class="card" style="width: ${ancho};">
    <img src="${evento.image}" class="card-img-top" alt="${evento.name}">
    <div class="card-body">
      <h${numero} class="card-title">${evento.name}</h5>
      <p class="${evento.description}">${evento.description}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`

  console.log(card)
  cardsDeEventos.push(card)

}

function printCards() {
  let conteiner1 = document.querySelector(`#card_conteiner`)
  conteiner1.innerHTML = cardsDeEventos.join(``)
}
printCards()


function printChecks(id_etiqueta, array_eventos) {
  let container = document.querySelector(id_etiqueta)
  let array_categories = array_eventos.map(each => each.category) //transformo array eventos en un array de categorias
  let categories = Array.from(new Set(array_categories)) // transformo el set en un array

  categories = categories.map(each => { // each es cada uno de los strings que representa una categoria
    return `
      <fieldset>
          <label class="contact-label" for="${each}">${each}</label>
          <input onclick="captureData()" class="class_checks contact-input" type="checkbox" value="${each}" name="tipo" id="${each}">
      </fieldset>
      `
  })

  categories.push(`
    <fieldset class="text-search" id="id_search">
      <input onkeyup="captureData()" id="id_search" class="contact-input" type="text" name="texto" placeholder="search">
    </fieldset>
  `)
  container.innerHTML = categories.join('')
}
printChecks('#checks', data.events)
function captureData() {
  let input_capture = document.querySelectorAll(`input:checked`)
  console.log(input_capture);
}


