var info='';
buildImage();

function buildImage () {
    fetch('http://localhost:8080/api/tour/')
    .then(respuesta => respuesta.json())
    .then(tour => {
        var val = id();
        //value -= 1;
        console.log(val);

                info += 
                `
                <div class="container-fluid d-flex justify-content-center align-items-center">
                <div class="row">
                    <div class="col-md d-flex justify-content-center">
                        <div class="card.mx-auto">
                            <img id="category" class="img-fluid" src="${tour[val].image}" alt="Card image cap">
                        </div>
                    </div>
                    <div class="col-md d-flex justify-content-center">
                        <div class="card.mx-auto">
                            <img class="img-fluid" id="category" src="${tour[val].image_two}" alt="Card image cap">
                        </div>
                    </div>
                    <div class="col-md d-flex justify-content-center">
                        <div class="card.mx-auto">
                            <img class="img-fluid" id="category" src="${tour[val].image_three}" alt="Card image cap">
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid" id="second-part">
                <div class="row">
                    <div class="col-md-7">
                        <h1 class="text-justify" id="encabezado" >${tour[val].name}</h1>
                        <p id="encabezado" >${tour[val].location} -  ${tour[val].category} experience</p>
                        <p id="contenido" class="font-weight-bold" style="font-size: large;"><label id="idprice">${tour[val].price} $ MXN pp</label></p>
            
                        <p  id="contenido" class="font-weight-bold" style="font-size: large;">${tour[val].about}</p>
                        </div>
                            <div class="col-sm-3">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1" id="contenido">Guests</label>
                                    <select class="form-control" id="exampleFormControlSelect1">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div class="col-md-2">
                                    <label for="start">Start date:</label>
                                
                                    <input type="date" id="start" name="trip-start" value="2022-01-01" min="2018-01-01" max="2100-12-31">
                                </div>
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

    function reserva(){

        userLogged = sessionStorage.getItem('user');
        
        
        alert(userLogged);
        alert("Reservation added");


    var num_reservations = document.getElementById("exampleFormControlSelect1").value;
    var date = document.getElementById("start").value;
    //var total_price = document.getElementsById("idprice").value;
    // var user_id = document.getElementById("inputImageUrl3").value;
    //var tour_id = tour[value].name;
     
    //alert(total_price);

    var total = num_reservations * 200;
    alert(total);

        var reservation = {
            num_reservations : num_reservations,
            date : date ,
            total_price : total ,
            user_id : userLogged ,
            tour_id : "cancun"
        }

        fetch("http://localhost:8080/api/reservation/", {
            method: 'POST', // or 'PUT'
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(reservation),
        })
        .then(response => response.text())
        .then(reservation => {
            console.log('Success:', reservation);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }