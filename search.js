let input = document.querySelector('#input');
let table = document.querySelector('#table');

let events = [
    {
        date: '01.01.2023',
        name: 'event 1',
        description: 'New Year',
    },
    {
        date: '01.02.2023',
        name: 'event 2',
        description: 'February',
    },
    {
        date: '01.01.2022',
        name: 'event 1',
        description: 'check',
    },
    {
        date: '01.03.2022',
        name: 'event 2',
        description: 'event 2 description',
    }
]

input.addEventListener('keyup', function(e) {
    if (e.keyCode === 13) {
        table.innerHTML = ''
        for (let event of events) {
            if (event.date.includes(input.value) ) {
                let tr = document.createElement('tr');
                let td1 = document.createElement('td');
                td1.textContent = event.date;
                let td2 = document.createElement('td');
                td2.textContent = event.name;
                let td3 = document.createElement('td');
                td3.textContent = event.description;
                
                tr.appendChild(td1)
                tr.appendChild(td2)
                tr.appendChild(td3)
                table.appendChild(tr)
            }
        }
    }
})

//удалять предыдущую таблицу