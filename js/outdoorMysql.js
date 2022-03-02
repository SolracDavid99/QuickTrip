var cards = '';

function buildCards () {

fetch('http://localhost:8080/api/tour/')
.then(respuesta => respuesta.json())
.then(tour => {
    for (let i = 0; i < tour.length; i++){
        if(tour[i].category=="Recreative")
            cards += 
            `
            <div class="col-md-2 d-flex justify-content-center">
                <div class="card.mx.auto">
                    <a href="../html/checkIn.html" onclick="saveId(${i})" id="tourImage"><img id="tourImage" src="${tour[i].image}" alt="..." class="img-fluid"></a>
                    <div class="card-body">
                        <p class="card-title" id="tourName">${tour[i].name}</p>
                        <p class="card-text" id="aboutTour"> <b>From ${tour[i].price} MXN</b> p/p</p>
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

function saveId(value){
    sessionStorage.setItem('id',value);
    console.log(value)
}