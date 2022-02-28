function buildNavBar() {
    var navBar =     
    `
    <div class="row d-flex justify-content-center">
        <div class="col-md-2">
            <button onclick="location.href='../html/food.html'" class="text-decoration-none text-dark "id="filter">Gastronomic </button>
        </div>
        <div class="col-md-2" >
            <button onclick="location.href='../html/cultural.html'" class="text-decoration-none text-dark" id="filter">Cultural</button>
        </div>
        <div class="col-md-2">
            <button onclick="location.href='../html/outdoors.html'" class="text-decoration-none text-dark" id="filter">Outdoors</button>
        </div>
        <div class="col-md-2">
            <button onclick="location.href='../html/nightLife.html'" class="text-decoration-none text-dark" id="filter">Night Life</button>
        </div>
        <div class="col-md-2">
            <button onclick="location.href='../html/all-Items.html'" class="text-decoration-none text-dark justify-content-end" id="filter">Show All</button>
        </div>
    </div>
<br>
    
    `;
    document.getElementById("filt").innerHTML = navBar;
}
buildNavBar();