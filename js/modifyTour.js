function modifyItem(id){
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

    fetch("http://localhost:8080/api/tour/"+"27"
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


