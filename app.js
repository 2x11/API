const app = document.querySelector('.container');

//peticion a la Api por Fetch
const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
.then(res => res.json()) //devuelve promesa 
.then(data => { //iterando el array
    data.forEach(user => {
        const p = document.createElement('p')
        p.setAttribute('id',user.id)
        p.innerHTML = user.name //tomando propiedad
        p.addEventListener('click', function(){
            window.location.href = `./user.html?id=${user.id}`
        })
        app.appendChild(p)
    });
    //console.log(data)
    })
.catch(err => console.log(err)); //capturando el error