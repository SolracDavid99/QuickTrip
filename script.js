function formulario(){

    const regexName = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;

    const regexEmail = /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}$/;

    const regexNumber = /^[0-9]*$/
    // ^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$

    var nombre=document.getElementsByTagName("input")[0].value;
    var email=document.getElementsByTagName("input")[1].value;
    var telefono=document.getElementsByTagName("input")[2].value;
    var texto=document.getElementsByTagName("textarea")[0].value;

    const onlyLetters = regexName.test(nombre);
    const onlyNumbers = regexNumber.test(telefono);
    const onlyEmails = regexEmail.test(email);

    if(nombre.length == 0 || email.length == 0 || texto.length == 0){
        alert("Has dejado un campo obliatorio vacio , favor de llenar y volver a enviar");
    }
    else if(onlyLetters==false){
        alert("En el campo de nombre no puede haber numeros, favor de verificar");
    }
    else if(onlyEmails==false){
        alert("Verifica tu email, favor de verificar");
    }
    else if(onlyNumbers==false){ //Validacion de numero telefonico
        alert("En el campo de telefono no puede haber letras, favor de verificar");
    }
    else{
        console.log("Nombre : "+ nombre + "\nEmail : "+ email + "\nTelefono : " + telefono + "\nTexxto : " + texto);
        alert("Se ha enviado tu soliticud");
        document.getElementsByTagName("input")[0].value = "";
        document.getElementsByTagName("input")[1].value = "";
        document.getElementsByTagName("input")[2].value = "";
        document.getElementsByTagName("textarea")[0].value = "";
    }
    
}