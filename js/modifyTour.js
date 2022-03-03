

function autoComplete(){
    
    var table = "";
    var autoCompleteId = id();

    fetch('http://localhost:8080/api/tour/'+autoCompleteId)
    
    .then(respuesta => respuesta.json())
    .then(tour => {

        console.log(tour);
        table = `<p>${tour.name}</p>`;

    document.getElementById("table").innerHTML = table;

})


} autoComplete();



function modifyItem(){


    var modifyId = id();
    console.log(modifyId);

    //var idt = id;
    const name = document.getElementById("inputTourName").value;
    const location = document.getElementById("inputState").value;
    const category = document.getElementById("formControlCategory").value;
    const image = document.getElementById("inputImageUrl1").value;
    const image_two = document.getElementById("inputImageUrl2").value;
    const image_three = document.getElementById("inputImageUrl3").value;
    const price = document.getElementById("inputPrice").value;
    const about = document.getElementById("textAreaDescription").value;
    //const city = document.getElementById("inputState").value;
    const rating = document.getElementById("inputRating").value;
    const reviews_num = document.getElementById("inputReviews").value;


    // console.log("valor de x: "+x);
    // alert("valor de idt: "+idt);

    fetch("http://localhost:8080/api/tour/"+modifyId
    +"?name=" + name 
    +"&location=" + location
    +"&category=" + category
    +"&image=" + image
    +"&image_two=" + image_two
    +"&image_three=" + image_three
    +"&price=" + price
    +"&about=" + about
    //+"&city=" + city
    +"&rating=" + rating
    +"&reviews_num=" + reviews_num,{

        method: "PUT",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        })
        //.then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));

}

function id(){
    var num =parseInt(sessionStorage.getItem('modifyId'));
    return num;
}

function idt(){
    var num =parseInt(sessionStorage.getItem('namet'));
    return num;
}