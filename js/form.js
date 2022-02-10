function formulario(){

    const regexName = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;

    const regexEmail = /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}$/;

    const regexNumber = /^[0-9]*$/
    // ^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$

    var nombre=document.getElementsByTagName("input")[0].value;
    var email=document.getElementsByTagName("input")[1].value;
    var telefono=document.getElementsByTagName("input")[2].value;
    var texto=document.getElementsByTagName("textarea")[0].value;

    document.getElementById("NameInput").classList.remove("borderColorDanger");
    document.getElementById("EmailInput").classList.remove("borderColorDanger");
    document.getElementById("CommentsTextArea").classList.remove("borderColorDanger");
    document.getElementById("NameInput").classList.remove("borderColorAlert");
    document.getElementById("EmailInput").classList.remove("borderColorAlert");
    document.getElementById("PhoneInput").classList.remove("borderColorAlert");

    danger.style.display = 'none';
    success.style.display = 'none';
    alert1.style.display = 'none';
    alert2.style.display = 'none';
    alert3.style.display = 'none';

    const onlyLetters = regexName.test(nombre);
    const onlyNumbers = regexNumber.test(telefono);
    const onlyEmails = regexEmail.test(email);

    if(nombre.length == 0 || email.length == 0 || texto.length == 0){
        //alert("Has dejado un campo obliatorio vacio , favor de llenar y volver a enviar");

        danger.style.display = 'block';
        if(nombre.length == 0){
            document.getElementById("NameInput").classList.add("borderColorDanger");
        }
        if(email.length == 0){
            document.getElementById("EmailInput").classList.add("borderColorDanger");
        }
        if(texto.length == 0){
            document.getElementById("CommentsTextArea").classList.add("borderColorDanger");
        }
    }
    else if(onlyLetters==false){
        alert1.style.display = 'block';
        document.getElementById("NameInput").classList.add("borderColorAlert");
    }
    else if(onlyEmails==false){
        alert2.style.display = 'block';
        document.getElementById("EmailInput").classList.add("borderColorAlert");
    }
    else if(onlyNumbers==false){
        alert3.style.display = 'block';
        document.getElementById("PhoneInput").classList.add("borderColorAlert");
        }
    else{
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your request has been sent',
            showConfirmButton: false,
            timer: 1500
        })
        console.log("Nombre : "+ nombre + "\nEmail : "+ email + "\nTelefono : " + telefono + "\nTexto : " + texto);
        sendMail(nombre,email,telefono,texto);
        document.getElementsByTagName("input")[0].value = "";
        document.getElementsByTagName("input")[1].value = "";
        document.getElementsByTagName("input")[2].value = "";
        document.getElementsByTagName("textarea")[0].value = "";
        success.style.display = 'block'
    }
    
}


function sendMail(nombre,email,telefono,texto){
    Email.send({
        Host : "smtp.mailtrap.io",
        Username : "ecd9369ddea454",
        Password : "0ee3d7e5988e94",
        To : 'quicktripcontact@gmail.com',
        From : "you@isp.com",
        Subject : "Someone contact you!",
        Body : "Nombre : "+ nombre + "\nEmail : "+ email + "\nTelefono : " + telefono + "\nTexto : " + texto 
    })
    // .then(
    // );
}
