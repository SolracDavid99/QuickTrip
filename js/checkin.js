
var info='';
buildImage();


function buildImage () {
    fetch('http://localhost:5000/api/tours')
    .then(respuesta => respuesta.json())
    .then(tours => {
        var value = id();
        console.log(value);

                info +=     
                `
                <!--Agregar rating y logo estrella-->
<div class="container-fluid d-flex justify-content-center align-items-center">
    <div class="row">
        <div class="col-md d-flex justify-content-center">
            <div class="card.mx-auto">
                <img id="category" class="img-fluid" src="${tours[value].image}" alt="Card image cap">
            </div>
        </div>
        <div class="col-md d-flex justify-content-center">
            <div class="card.mx-auto">
                <img class="img-fluid" id="category" src="${tours[value].image_two}" alt="Card image cap">
            </div>
        </div>
        <div class="col-md d-flex justify-content-center">
            <div class="card.mx-auto">
                <img class="img-fluid" id="category" src="${tours[value].image_three}" alt="Card image cap">
            </div>
        </div>
    </div>
</div>

<div class="container-fluid" id="second-part">
    <div class="row">
        <div class="col-md-7">
            <h1 class="text-justify" id="encabezado">${tours[value].name}</h1>
            <p id="encabezado">${tours[value].location} - ${tours[value].category} experience</p>
            <p id="contenido" class="font-weight-bold" style="font-size: large;">${tours[value].price} $ MXN pp</p>

            <p id="contenido" class="font-weight-bold" style="font-size: large;">${tours[value].about}</p>
        </div>
        <!-- Guest -->
    </div>
</div>
</div>
<div class="container-fluid">
    <!-- Input Date -->
    <div class="row">
        <div class="col-md-2">
            <label for="start">Date</label>

            <input type="date" id="start" value="" min="" max="">
        </div>

        <div class="col-sm-1">
            <form class="form-inline">
                <div class="form-group">
                    <label for="exampleFormControlSelect1" id="contenido">Guests</label>
                    <select class="form-control" name="guestValue" id="guestValue">
                        <option>1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
            </form>
        </div>
    </div>
</div>


                `
        document.getElementById('info').innerHTML = info;
    })
    .catch(err=>console.log(err))
    }
    console.log(id());


    function id(){
        var num =parseInt(sessionStorage.getItem('id'));
        return num;
    }

    function setGuest(value){

    }
function date(){
    var today = new Date();
    var dd = today.getDate()+1;
    var mm = today.getMonth(); //January is 0 so need to add 1 to make it 1!
    var yyyy = today.getFullYear();
    today = yyyy+'-'+mm+'-'+dd;
    document.getElementById("start").setAttribute("min", today);
    console.log(today);
}
date();