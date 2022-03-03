function buildNavBar() {
    var navBar =     
    ` <nav class="navbar navbar-expand-lg navbar-light shadow-sm p-3 mb-5 bg-white rounded">
    <a class="navbar-brand" href="/html/home.html"><img id="logo" src="/assets/nuevologo.png">
        <img id="avion" src="/assets/nuevoavion.png">
        <div></div>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link text-black" href="./itemES.html">Lista de experiencias</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-black" href="./addItemES.html">Agregar experiencia</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-black" href="./contactUs-v2ES.html">Contactanos</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-black" href=".">Sobre nosotros</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-black" href="./aboutUs.html">EN</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">
                    <div>
                        <img id="login" src="/assets/login.png">
                    </div>
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="#">Iniciar sesión</a>
                    <a class="dropdown-item" href="#">Registrate</a>
                </div>
            </li>
        </ul>
    </div>
</nav>`
document.getElementById("navBar").innerHTML = navBar;
}
buildNavBar();