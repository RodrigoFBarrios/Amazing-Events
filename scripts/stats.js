

fetch("https://mindhub-ab35.onrender.com/api/amazing-events")
    .then(response => response.json())
    .then(data => {

        let maxAttendance = 0;
        let eventWithMaxAttendance = null;
        let minAttendance = 100;
        let eventWithMinAttendance = null;
        let eventWithLargerCapacity = null;
        let eventFuture = data.events.filter(each => each.date > data.currentDate) 
        let eventPast = data.events.filter(each => each.date < data.currentDate) 
        let highAssistance = assistance(eventPast)[0]
        let lowAssistance = assistance(eventPast).reverse()[0]
        let mostCapacity = capacity(data.events)
        
        
        printFirstColumn(highAssistance,lowAssistance,mostCapacity )
        
     
    })


function capacity(array) {
let array_capacity = array.map(events => {
    return {
        capacity: events.capacity, 
        name: events.name,
    }
})
array_capacity.sort((a, b) => b.capacity - a.capacity)
return array_capacity[0]
}

function assistance(array) {
    let array_assistance = array.map(events => {
        return {
            assistance: events.assistance, 
            name: events.name,
        }
    })
    array_assistance.sort((a, b) => b.assistance - a.assistance)
   /*  console.log(array_assistance) */
    return array_assistance
    }

function printFirstColumn(highAssistance, lowAssistance, capacity){
    const firstTable = document.getElementById("eventsStatsBody")
    firstTable.innerHTML = `<tr>
    <td>${highAssistance.name}</td>
    <td>${lowAssistance.name}</td>
    <td>${capacity.name}</td>
  </tr>
    
    `
}

function category(array) {
    let array_category = array.map(events => {
        return {
            category: events.category, 
            name: events.name,
        }
    })
    array_category.sort((a, b) => b.category - a.category)
    console.log(array_category)
    return array_category[0]
    }



