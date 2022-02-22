function agregarItem(){

    const regexName = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;

    const regexNumber = /^[0-9]*$/

    const regexRating = /^[0-9]+[.]+[0-9]+[0-9]*$/
    
    var tourName = document.getElementById("inputTourName").value;
    var category = document.getElementById("formControlCategory").value;
    var price = document.getElementById("inputPrice").value;
    var state = document.getElementById("inputState").value;
    var rating = document.getElementById("inputRating").value;
    var reviews= document.getElementById("inputReviews").value;
    var imageUrl = document.getElementById("inputImageUrl").value;
    var description = document.getElementById("textAreaDescription").value;

    console.log(tourName,category,price,state,rating,reviews,imageUrl,description);

    document.getElementsByTagName("input")[0].classList.remove("borderColorDanger","borderColorAlert");
    document.getElementsByTagName("select")[0].classList.remove("borderColorDanger","borderColorAlert");
    document.getElementsByTagName("input")[1].classList.remove("borderColorDanger","borderColorAlert");
    document.getElementsByTagName("input")[2].classList.remove("borderColorDanger","borderColorAlert");
    document.getElementsByTagName("input")[3].classList.remove("borderColorDanger","borderColorAlert");
    document.getElementsByTagName("input")[4].classList.remove("borderColorDanger","borderColorAlert");
    document.getElementsByTagName("input")[5].classList.remove("borderColorDanger","borderColorAlert");
    document.getElementsByTagName("textarea")[0].classList.remove("borderColorDanger","borderColorAlert");

    danger.style.display = 'none';
    success.style.display = 'none';
    alert1.style.display = 'none';
    alert2.style.display = 'none';
    alert3.style.display = 'none';
    alert4.style.display = 'none';
    alert5.style.display = 'none';

    //test con regex
    const onlyLettersTours = regexName.test(tourName);
    const onlyNumbersPrice = regexNumber.test(price);
    const onlyLettersState = regexName.test(state);
    const onlyRating = regexRating.test(rating);
    const onlyNumbersReviews = regexNumber.test(reviews);

    if(tourName.length == 0 || price.length == 0|| state.length == 0 || rating.length == 0 || reviews.length == 0 || imageUrl.length == 0 || description.length == 0){

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
        if(imageUrl.length == 0 ){
            document.getElementById("inputImageUrl").classList.add("borderColorDanger");
        }
        if(description.length == 0){
            document.getElementById("textAreaDescription").classList.add("borderColorDanger");
        }

    }else if(onlyLettersTours==false){
        alert1.style.display = 'block';
        document.getElementById("inputTourName").classList.add("borderColorAlert");
    }
    else if(onlyNumbersPrice==false){
        alert2.style.display = 'block';
        document.getElementById("inputPrice").classList.add("borderColorAlert");
    }
    // else if(onlyLettersState==false){
    //     alert3.style.display = 'block';
    //     document.getElementById("inputState").classList.add("borderColorAlert");
    // }
    else if(onlyRating==false){
        alert3.style.display = 'block';
        document.getElementById("inputRating").classList.add("borderColorAlert");
    }
    else if(onlyNumbersReviews==false){
        alert3.style.display = 'block';
        document.getElementById("inputReviews").classList.add("borderColorAlert");
    }
    else{

    var tour = {
        tourName : tourName,
        category : category,
        price : price ,
        state : state , 
        rating : rating ,
        reviews : reviews ,
        imageUrl : imageUrl ,
        description : description
    }

    sessionStorage.setItem("id",JSON.stringify(tour));

    document.getElementsByTagName("input")[0].value="";
    document.getElementsByTagName("select")[0].value="Gastronomic";
    document.getElementsByTagName("input")[1].value="";
    document.getElementsByTagName("input")[2].value="";
    document.getElementsByTagName("input")[3].value="";
    document.getElementsByTagName("input")[4].value="";
    document.getElementsByTagName("input")[5].value="";
    document.getElementsByTagName("textarea")[0].value="";

    document.getElementsByTagName("input")[0].classList.remove("borderColorDanger","borderColorAlert");
    document.getElementsByTagName("select")[0].classList.remove("borderColorDanger","borderColorAlert");
    document.getElementsByTagName("input")[1].classList.remove("borderColorDanger","borderColorAlert");
    document.getElementsByTagName("input")[2].classList.remove("borderColorDanger","borderColorAlert");
    document.getElementsByTagName("input")[3].classList.remove("borderColorDanger","borderColorAlert");
    document.getElementsByTagName("input")[4].classList.remove("borderColorDanger","borderColorAlert");
    document.getElementsByTagName("input")[5].classList.remove("borderColorDanger","borderColorAlert");
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