var moreTours ='';
buildCards();

function buildCards () {
    fetch('http://localhost:8080/api/tour/')
.then(respuesta => respuesta.json())
.then(tour => {
    
    for (let i = 0; i<4; i++){
        var random = getRandomInt(0,tour.length)
        moreTours += 
            `
                    <div class="col-md justify-content-center align-items-center">
                        <div class="card.mx.auto">
                            <a href="../html/checkIn.html" onclick="saveId(${random})" id="tourImage"><img id="tourImage" src="${tour[random].image}" alt="..." class="img-fluid"></a>
                            <div class="card-body">
                                <p class="card-title" id="tourName">${tour[random].name}</p>
                                <p class="card-text" id="aboutTour"> <b>From ${tour[random].price} MXN</b> p/p</p>
                            </div>
                        </div>
                    </div>
                
            `
    }//for
    document.getElementById('moreTours').innerHTML = moreTours;
})
.catch(err=>console.log(err))
}

function saveId(value){
    sessionStorage.setItem('id',value);
    console.log(value)
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
