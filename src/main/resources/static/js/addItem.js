function agregarItem(){

    //const regexName = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;

    const regexNumber = /^[0-9]*$/

    // const regexRating = /^[0-5]*$/
    
    var city = null;
    var tourName = document.getElementById("inputTourName").value;
    var category = document.getElementById("formControlCategory").value;
    var price = document.getElementById("inputPrice").value;
    var state = document.getElementById("inputState").value;
    var rating = document.getElementById("inputRating").value;
    var reviews= document.getElementById("inputReviews").value;
    var imageUrl1 = document.getElementById("inputImageUrl1").value;
    var imageUrl2 = document.getElementById("inputImageUrl2").value;
    var imageUrl3 = document.getElementById("inputImageUrl3").value;
    var description = document.getElementById("textAreaDescription").value;

    // console.log(tourName,category,price,state,rating,reviews,imageUrl,description);

    document.getElementsByTagName("input")[0].classList.remove("borderColorDanger","borderColorAlert");
    document.getElementsByTagName("select")[0].classList.remove("borderColorDanger","borderColorAlert");
    document.getElementsByTagName("input")[1].classList.remove("borderColorDanger","borderColorAlert");
    document.getElementsByTagName("input")[2].classList.remove("borderColorDanger","borderColorAlert");
    document.getElementsByTagName("input")[3].classList.remove("borderColorDanger","borderColorAlert");
    document.getElementsByTagName("input")[4].classList.remove("borderColorDanger","borderColorAlert");
    document.getElementsByTagName("input")[5].classList.remove("borderColorDanger","borderColorAlert");
    document.getElementsByTagName("input")[6].classList.remove("borderColorDanger","borderColorAlert");
    document.getElementsByTagName("input")[7].classList.remove("borderColorDanger","borderColorAlert");
    document.getElementsByTagName("textarea")[0].classList.remove("borderColorDanger","borderColorAlert");

    danger.style.display = 'none';
    success.style.display = 'none';
    alert1.style.display = 'none';
    alert2.style.display = 'none';
    alert3.style.display = 'none';

    //test con regex
    //const onlyLettersTours = regexName.test(tourName);
    const onlyNumbersPrice = regexNumber.test(price);
    // const onlyLettersState = regexName.test(state);
    // const onlyRating = regexRating.test(rating);
    const onlyNumbersReviews = regexNumber.test(reviews);

    if(tourName.length == 0 || price.length == 0|| state.length == 0 || rating.length == 0 || reviews.length == 0 || imageUrl1.length == 0 || imageUrl2.length == 0 || imageUrl3.length == 0 || description.length == 0){

        danger.style.display = 'block';

        if(tourName.length == 0){
            document.getElementById("inputTourName").classList.add("borderColorDanger");
        }
        if(price.length == 0){
            document.getElementById("inputPrice").classList.add("borderColorDanger");
        }
        if(state.length == 0) {
            document.getElementById("inputState").classList.add("borderColorDanger");
        }
        if(rating.length == 0 ){
            document.getElementById("inputRating").classList.add("borderColorDanger");
        }
        if(reviews.length == 0 ){
            document.getElementById("inputReviews").classList.add("borderColorDanger");
        }
        if(imageUrl1.length == 0 ){
            document.getElementById("inputImageUrl1").classList.add("borderColorDanger");
        }
        if(imageUrl2.length == 0 ){
            document.getElementById("inputImageUrl2").classList.add("borderColorDanger");
        }
        if(imageUrl3.length == 0 ){
            document.getElementById("inputImageUrl3").classList.add("borderColorDanger");
        }
        if(description.length == 0){
            document.getElementById("textAreaDescription").classList.add("borderColorDanger");
        }

    }
    // else if(onlyLettersTours==false){
    //     alert1.style.display = 'block';
    //     document.getElementById("inputTourName").classList.add("borderColorAlert");
    // }
    else if( onlyNumbersPrice==false ){
        alert1.style.display = 'block';
        document.getElementById("inputPrice").classList.add("borderColorAlert");
    }
    else if( rating<0||rating>5 ){
        alert2.style.display = 'block';
        document.getElementById("inputRating").classList.add("borderColorAlert");
    }
    else if( onlyNumbersReviews==false ){
        alert3.style.display = 'block';
        document.getElementById("inputReviews").classList.add("borderColorAlert");
    }
    else{


    var tour = {
        name : tourName,
        location : state ,
        category : category,
        image : imageUrl1 ,
        image_two : imageUrl2 ,
        image_three : imageUrl3,
        price : price,
        about : description ,
        city : city ,
        rating : rating ,
        reviews_num : reviews 
    }

    var listTours = tour;
    console.log(listTours);

    sessionStorage.setItem("id",JSON.stringify(tour));

    fetch("http://localhost:8080/api/tour/", {
    method: 'POST', // or 'PUT'
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(listTours),
})
.then(response => response.text())
.then(listTours => {
    console.log('Success:', listTours);
})
.catch((error) => {
    console.error('Error:', error);
});


    document.getElementsByTagName("input")[0].value="";
    document.getElementsByTagName("select")[0].value="Gastronomic";
    document.getElementsByTagName("input")[1].value="";
    document.getElementsByTagName("input")[2].value="";
    document.getElementsByTagName("input")[3].value="";
    document.getElementsByTagName("input")[4].value="";
    document.getElementsByTagName("input")[5].value="";
    document.getElementsByTagName("input")[6].value="";
    document.getElementsByTagName("input")[7].value="";
    document.getElementsByTagName("textarea")[0].value="";

    document.getElementsByTagName("input")[0].classList.remove("borderColorDanger","borderColorAlert");
    document.getElementsByTagName("select")[0].classList.remove("borderColorDanger","borderColorAlert");
    document.getElementsByTagName("input")[1].classList.remove("borderColorDanger","borderColorAlert");
    document.getElementsByTagName("input")[2].classList.remove("borderColorDanger","borderColorAlert");
    document.getElementsByTagName("input")[3].classList.remove("borderColorDanger","borderColorAlert");
    document.getElementsByTagName("input")[4].classList.remove("borderColorDanger","borderColorAlert");
    document.getElementsByTagName("input")[5].classList.remove("borderColorDanger","borderColorAlert");
    document.getElementsByTagName("input")[6].classList.remove("borderColorDanger","borderColorAlert");
    document.getElementsByTagName("input")[7].classList.remove("borderColorDanger","borderColorAlert");
    document.getElementsByTagName("textarea")[0].classList.remove("borderColorDanger","borderColorAlert");

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Item added succesfully',
        showConfirmButton: false,
        timer: 2000
    })

    }//else

}