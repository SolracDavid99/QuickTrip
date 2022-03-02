var info='';
buildImage();

function buildImage () {
    fetch('http://localhost:8080/api/tour/')
    .then(respuesta => respuesta.json())
    .then(tour => {
        var value = id();
        //value -= 1;
        console.log(value);

                info += 
                `
                <div class="container-fluid d-flex justify-content-center align-items-center">
                <div class="row">
                    <div class="col-md d-flex justify-content-center">
                        <div class="card.mx-auto">
                            <img id="category" class="img-fluid" src="${tour[value].image}" alt="Card image cap">
                        </div>
                    </div>
                    <div class="col-md d-flex justify-content-center">
                        <div class="card.mx-auto">
                            <img class="img-fluid" id="category" src="${tour[value].image_two}" alt="Card image cap">
                        </div>
                    </div>
                    <div class="col-md d-flex justify-content-center">
                        <div class="card.mx-auto">
                            <img class="img-fluid" id="category" src="${tour[value].image_three}" alt="Card image cap">
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid" id="second-part">
                <div class="row">
                    <div class="col-md-7">
                        <h1 class="text-justify" id="encabezado">${tour[value].name}</h1>
                        <p id="encabezado">${tour[value].location} -  ${tour[value].category} experience</p>
                        <p id="contenido" class="font-weight-bold" style="font-size: large;">${tour[value].price} $ MXN pp</p>
            
                        <p id="contenido" class="font-weight-bold" style="font-size: large;">${tour[value].about}</p>
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
                                
                                    <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31">
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