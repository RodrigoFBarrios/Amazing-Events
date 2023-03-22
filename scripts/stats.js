

fetch("https://mindhub-ab35.onrender.com/api/amazing-events")
    .then(response => response.json())
    .then(data => {

        let maxAttendance = 0;
        let eventWithMaxAttendance = null;
        let minAttendance = 100;
        let eventWithMinAttendance = null;
        for (let event of data.events) {
            const attendancePercentage = (event.assistance / event.capacity) * 100;
            //console.log(attendancePercentage)
            if (attendancePercentage > maxAttendance) {
                maxAttendance = attendancePercentage;
                eventWithMaxAttendance = event;
            }
            if (attendancePercentage < minAttendance) {
                minAttendance = attendancePercentage;
                eventWithMinAttendance = event;
            }
        }
        console.log(`El evento con el mayor porcentaje de asistencia es: ${eventWithMaxAttendance.name}. Porcentaje de asistencia: ${maxAttendance}%`);
        console.log(`El evento con el menor porcentaje de asistencia es: ${eventWithMinAttendance.name}. Porcentaje de asistencia: ${minAttendance}%`);

        let id_maxAttendanceEvent = document.getElementById(`id_maxAttendanceEvent`)
        id_maxAttendanceEvent.innerHTML = eventWithMaxAttendance.name

        let id_people = document.getElementById(`id_people`)
        id_people.innerHTML = eventWithMaxAttendance.assistance

        let id_maxAttendance = document.getElementById(`id_maxAttendance`)
        id_maxAttendance.innerHTML = maxAttendance.toFixed(2);
    })
    .catch(error => console.error(error));










function printCards(events) {
    let cardsDeEventos = []
    let numero = 3
    let ancho = `20rem`
    for (let evento of events) {
        let card = `<div class="card" style="width: ${ancho};">
      <img src="${evento.image}" class="card-img-top" alt="${evento.name}">
      <div class="card-body">
        <h${numero} class="card-title">${evento.name}</h5>
        <p class="${evento.description}">${evento.description}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`


        cardsDeEventos.push(card)
    }
    let conteiner1 = document.querySelector(`#tabla_id`)
    conteiner1.innerHTML = cardsDeEventos.join(``)
}