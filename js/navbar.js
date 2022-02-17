function buildNavBar() {
    var navBar =     
    `
    <nav class="navbar navbar-expand-lg navbar-light p-3 mb-5">
    <a class="navbar-brand" href="home.html"><img id="logo" src="../assets/nuevologo2.png">
        <img id="avion" src="../assets/nuevoavion.png">
        <div></div>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link text-black" href="./item.html">Item list</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-black" href="./addItem.html">Add Item</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-black" href="./contactUs-v2.html">Contact us</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-black" href="./aboutUs.html">About us</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-black" href="../htmlES/homeES.html">ES/EN</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">
                    <div>
                        <img id="login" src="../assets/login.png">
                    </div>
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="../html/login.html">Login</a>
                    <a class="dropdown-item" href="../html/signUp.html">Register</a>
                </div>
            </li>
        </ul>
    </div>
</nav>
    `;
    document.getElementById("navBar").innerHTML = navBar;
}
buildNavBar();