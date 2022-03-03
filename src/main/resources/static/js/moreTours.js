var moreTours ='';
buildCards();

function buildCards () {
    fetch('http://localhost:5000/api/tours')
.then(respuesta => respuesta.json())
.then(tours => {
    
    for (let i = 0; i<4; i++){
        var random = getRandomInt(0,tours.length)
        moreTours += 
            `
                    <div class="col-md justify-content-center align-items-center">
                        <div class="card.mx.auto">
                            <a href="../html/checkIn.html" onclick="saveId(${random})" id="tourImage"><img id="tourImage" src="${tours[random].image}" alt="..." class="img-fluid"></a>
                            <div class="card-body">
                                <p class="card-title" id="tourName">${tours[random].name}</p>
                                <p class="card-text" id="aboutTour"> <b>From ${tours[random].price} MXN</b> p/p</p>
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
