function agregarItem(){
    var tourName=document.getElementsByTagName("input")[0].value;
    var category=document.getElementsByTagName("select")[0].value;
    var price=document.getElementsByTagName("input")[1].value;
    var state=document.getElementsByTagName("input")[2].value;
    var imageUrl=document.getElementsByTagName("input")[3].value;
    var descripcion=document.getElementsByTagName("textarea")[0].value;

    console.log(tourName,category,price,state,imageUrl,descripcion);

    document.getElementsByTagName("input")[0].value="";
    document.getElementsByTagName("select")[0].value="Gastronomic";
    document.getElementsByTagName("input")[1].value="";
    document.getElementsByTagName("input")[2].value="";
    document.getElementsByTagName("input")[3].value="";
    document.getElementsByTagName("textarea")[0].value="";

    alert("Listo, producto registrado");
}