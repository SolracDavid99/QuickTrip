function agregarItem(){
    var tourName = document.getElementsByTagName("input")[0].value;
    var category = document.getElementsByTagName("select")[0].value;
    var price = document.getElementsByTagName("input")[1].value;
    var state = document.getElementsByTagName("input")[2].value;
    var rating = document.getElementsByTagName("input")[3].value;
    var reviews= document.getElementsByTagName("input")[4].value;
    var imageUrl = document.getElementsByTagName("input")[5].value;
    var description = document.getElementsByTagName("textarea")[0].value;

    console.log(tourName,category,price,state,rating,reviews,imageUrl,description);

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

    // document.getElementsByTagName("input")[0].value="";
    // document.getElementsByTagName("select")[0].value="Gastronomic";
    // document.getElementsByTagName("input")[1].value="";
    // document.getElementsByTagName("input")[2].value="";
    // document.getElementsByTagName("input")[3].value="";
    // document.getElementsByTagName("textarea")[0].value="";

    // Swal.fire({

    //     position: 'center',

    //     icon: 'success',

    //     title: 'Item added succesfully',

    //     showConfirmButton: false,

    //     timer: 2000

    // })
}