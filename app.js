const app = document.querySelector('.container');

//peticion a la Api por Fetch
const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
.then(res => res.json()) //devuelve promesa 
.then(data => { //iterando el array
    data.forEach(user => {
        /*console.log(user.name)*/ //tomando propiedad
        const p = document.createElement('p')
        p.innerHTML = user.name
        app.appendChild(p)
    });
    //console.log(data)
    })
.catch(err => console.log(err)); //capturando el error