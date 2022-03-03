

async function formulario(){


    var userName=document.getElementsByTagName("input")[0].value;
    var password=document.getElementsByTagName("input")[1].value;

    document.getElementById("userInput").classList.remove("borderColorDanger");
    document.getElementById("passwordInput").classList.remove("borderColorDanger");
    document.getElementById("userInput").classList.remove("borderColorAlert");
    document.getElementById("passwordInput").classList.remove("borderColorAlert");

    danger.style.display = 'none';


    if(userName.length == 0 || password.length == 0){
        //alert("Has dejado un campo obliatorio vacio , favor de llenar y volver a enviar");

        danger.style.display = 'block';
        if(userName.length == 0){
            document.getElementById("userInput").classList.add("borderColorDanger");
        }
        if(password.length == 0){
            document.getElementById("passwordInput").classList.add("borderColorDanger");
        }
    }
    else{
        if ((userName == "SolracDavid99" && password == "123")||(userName == "Salvador" && password == "1234")||(userName == "Alonso" && password == "1234")||(userName == "Paulo" && password == "1234")||(userName == "Larisa" && password == "1234")||(userName == "Jazmin" && password == "1234")||(userName == "Ernesto" && password == "1234")||(userName == "Angel" && password == "1234")||(userName == "Sergio" && password == "1234")){

            sessionStorage.setItem('user',userName);
            sessionStorage.setItem('adm',1);

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Welcome ' + userName,
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true
            });

            document.getElementsByTagName("input")[0].value = "";
            document.getElementsByTagName("input")[1].value = "";
            await sleep(2000);
            // window.location.href = '/html/home.html';
        }else if((userName == "Carlos04" && password == "123")||(userName == "usuario" && password == "1234")){

            sessionStorage.setItem('user',userName);
            sessionStorage.setItem('adm',0);

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Welcome ' + userName,
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true
            });
            
            document.getElementsByTagName("input")[0].value = "";
            document.getElementsByTagName("input")[1].value = "";
            await sleep(2000);
            // window.location.href = '/html/home.html';
        }
        else{
            document.getElementById("userInput").classList.add("borderColorDanger");
            document.getElementById("passwordInput").classList.add("borderColorDanger");
            wrong.style.display = 'block';
        }
    }
    
    if(sessionStorage.getItem('user') != "")window.location.href = '../html/home.html';
}

function sleep(ms) {
    return new Promise(
        resolve => setTimeout(resolve, ms)
    );
}
