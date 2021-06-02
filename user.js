const app = document.querySelector('.container')
const getUrl = new URLSearchParams(window.location.search) //desglosando URL
id = getUrl.get('id') //capturando id
const url = 'https://jsonplaceholder.typicode.com/users'

fetch(`${url}/${id}`)
.then(res => res.json())
.then(data => {
    const name = document.createElement('p')
    name.innerHTML = data.name
    const email = document.createElement('p')
    email.innerHTML = data.email
    app.appendChild(name)
    app.appendChild(email)
})
.catch(err => console.log(err))