
function pickTour(id){

fetch('http://localhost:5000/api/tours')
.then(respuesta => respuesta.json())
.then(tours => {

    let element = document.getElementById('tourName') ;
    element.innerHTML = `<h1> ${tours[id].name}<h1>`;
    let image = document.getElementById('tourImage') ;
    image.innerHTML = `<img src=${tours[id].image}  class="img-fluid">`;
    let about = document.getElementById('aboutTour') ;
    about.innerHTML = `${tours[id].about}`;
    
})
.catch(err=>console.log(err))
}
pickTour(0);