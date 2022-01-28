
fetch('http://localhost:5000/api/tours')
.then(respuesta => respuesta.json())
.then(tours => {
    let id = 0 ;
    let title = document.getElementsByTagName('title')
    title.innerHTML = `${tours[id].name}`;
    let element = document.getElementById('element')
    element.innerHTML = `<h1> ${tours[id].name}<h1> <h3>${tours[id].category}</h3> <p> ${tours[id].price}</p><p> ${tours[id].about}</p> <img src=${tours[id].image} alt="">`;
    
})
.catch(err=>console.log(err))