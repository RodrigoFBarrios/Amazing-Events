/* console.log(data) */
const eventos = data.events
let cardsDeEventos = []
let numero = 3
let ancho = `20rem`
for (let evento of eventos) {
  if (data.currentDate < evento.date) {
    let card = `<div class="card" style="width: ${ancho};">
    <img src="${evento.image}" class="card-img-top" alt="${evento.name}">
    <div class="card-body">
      <h${numero} class="card-title">${evento.name}</h5>
      <p class="${evento.description}">${evento.description}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`

   /*  console.log(card) */
    cardsDeEventos.push(card)
  }
}
function printCards() {
  let conteiner1 = document.querySelector(`#card_conteiner`)
  conteiner1.innerHTML = cardsDeEventos.join(``)
}
printCards()
