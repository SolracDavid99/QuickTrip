var cards = '';

function buildCards () {
fetch('http://localhost:5000/api/tours')
.then(respuesta => respuesta.json())
.then(tours => {
    for (let i = 0; i < tours.length; i++){

            cards += 
            `
            <div class="col-md-2 d-flex justify-content-center">
                <div class="card.mx.auto">
                    <button id="tourImage"><img id="tourImage" src="${tours[i].image}" alt="..." class="img-fluid"></button>
                    <div class="card-body">
                        <p class="card-title" id="tourName">${tours[i].name}</p>
                        <p class="card-text" id="aboutTour"> <b>From ${tours[i].price} MXN</b> p/p</p>
                    </div>
                </div>
            </div>
            `
    }//for
    document.getElementById('cards').innerHTML = cards;
})
.catch(err=>console.log(err))
}

buildCards();