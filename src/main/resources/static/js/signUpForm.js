function signUp(){

    const regexName = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;

    const regexEmail = /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}$/;

    const regexNumber = /^[0-9]*$/
    // ^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$

    var fullName=document.getElementsByTagName("input")[0].value;
    var phone=document.getElementsByTagName("input")[1].value;
    var userName=document.getElementsByTagName("input")[2].value;
    var email=document.getElementsByTagName("input")[3].value;
    var password=document.getElementsByTagName("input")[4].value;
    var confirmPassword=document.getElementsByTagName("input")[5].value;
    
    document.getElementById("exampleInputFullName").classList.remove("borderColorDanger");
    document.getElementById("exampleInputPhone").classList.remove("borderColorDanger");
    document.getElementById("exampleInputUserName").classList.remove("borderColorDanger");
    document.getElementById("exampleInputEmail1").classList.remove("borderColorDanger");
    document.getElementById("exampleInputPassword1").classList.remove("borderColorDanger");
    document.getElementById("exampleConfirmPassword").classList.remove("borderColorDanger");

    document.getElementById("exampleInputFullName").classList.remove("borderColorAlert");
    document.getElementById("exampleInputPhone").classList.remove("borderColorAlert");
    document.getElementById("exampleInputUserName").classList.remove("borderColorAlert");
    document.getElementById("exampleInputEmail1").classList.remove("borderColorAlert");
    document.getElementById("exampleInputPassword1").classList.remove("borderColorAlert");
    document.getElementById("exampleConfirmPassword").classList.remove("borderColorDanger");

    danger.style.display = 'none';
    success.style.display = 'none';
    alert1.style.display = 'none';
    alert2.style.display = 'none';
    alert3.style.display = 'none';
    alert4.style.display = 'none';
    alert5.style.display = 'none';

    const onlyLetters = regexName.test(fullName);
    const onlyNumbers = regexNumber.test(phone);
    const onlyEmails = regexEmail.test(email);

    if(fullName.length == 0 || phone.length == 0 || userName.length == 0|| email.length == 0 || password.length == 0 || confirmPassword == 0 ){
        //alert("Has dejado un campo obliatorio vacio , favor de llenar y volver a enviar");

        danger.style.display = 'block';

        if(fullName.length == 0){
            document.getElementById("exampleInputFullName").classList.add("borderColorDanger");
        }
        if(phone.length == 0){
            document.getElementById("exampleInputPhone").classList.add("borderColorDanger");
        }
        if(userName.length == 0){
            document.getElementById("exampleInputUserName").classList.add("borderColorDanger");
        }
        if(email.length == 0){
            document.getElementById("exampleInputEmail1").classList.add("borderColorDanger");
        }
        if(password.length == 0){
            document.getElementById("exampleInputPassword1").classList.add("borderColorDanger");
        }
        if(confirmPassword.length == 0){
            document.getElementById("exampleConfirmPassword").classList.add("borderColorDanger");
        }
    }else if(onlyLetters==false){
        alert1.style.display = 'block';
        document.getElementById("exampleInputFullName").classList.add("borderColorAlert");
    }
    else if(onlyEmails==false){
        alert2.style.display = 'block';
        document.getElementById("exampleInputEmail1").classList.add("borderColorAlert");
    }
    else if(onlyNumbers==false){
        alert3.style.display = 'block';
        document.getElementById("exampleInputPhone").classList.add("borderColorAlert");
    }
    else if(password != confirmPassword){
        alert5.style.display = 'block';
        document.getElementById("exampleInputPassword1").classList.add("borderColorAlert");
        document.getElementById("exampleConfirmPassword").classList.add("borderColorAlert");
    }
    else{
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your account has been created',
            showConfirmButton: false,
            timer: 1500
        })

        document.getElementsByTagName("input")[0].value='';
        document.getElementsByTagName("input")[1].value='';
        document.getElementsByTagName("input")[2].value='';
        document.getElementsByTagName("input")[3].value='';
        document.getElementsByTagName("input")[4].value='';
        document.getElementsByTagName("input")[5].value='';


        document.getElementById("exampleInputFullName").classList.remove("borderColorDanger");
        document.getElementById("exampleInputPhone").classList.remove("borderColorDanger");
        document.getElementById("exampleInputUserName").classList.remove("borderColorDanger");
        document.getElementById("exampleInputEmail1").classList.remove("borderColorDanger");
        document.getElementById("exampleInputPassword1").classList.remove("borderColorDanger");
        document.getElementById("exampleConfirmPassword").classList.remove("borderColorDanger");

        document.getElementById("exampleInputFullName").classList.remove("borderColorAlert");
        document.getElementById("exampleInputPhone").classList.remove("borderColorAlert");
        document.getElementById("exampleInputUserName").classList.remove("borderColorAlert");
        document.getElementById("exampleInputEmail1").classList.remove("borderColorAlert");
        document.getElementById("exampleInputPassword1").classList.remove("borderColorAlert");
        document.getElementById("exampleConfirmPassword").classList.remove("borderColorAlert");

        console.log("Name: " + fullName + "\nPhone: " + phone + "\nUserName: " + userName + "\nEmail: " + email + "\nPassword: " + password + "\nConfirmPassword: " + confirmPassword);
    }
}