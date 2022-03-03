var tables = "";

function buildTables() {
    fetch("http://localhost:8080/api/tour/")
    .then((respuesta) => respuesta.json())
    .then((tour) => {
        for (let i = 0; i < tour.length; i++) {
        console.log(tour);

        tables += `<tr>
            <td scope="row">${tour[i].id}</td>
            <td>${tour[i].name}</td>
            <td><button type="button" class="btn-danger btn-sm" onclick= "deleteTour(${tour[i].id})" id="contenido">Delete Item</button><button type="button" class="btn-primary btn-sm" onclick= "modifyTours(${tour[i].id})" id="contenido">Modify</button></td>
        </tr>`;
      } //for
        document.getElementById("tables").innerHTML = tables;
    })
    .catch((err) => console.log(err));
}

buildTables();

function deleteTour(idDelete) {


    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {

            fetch("http://localhost:8080/api/tour/" + idDelete, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
                })
                .then((response) => response.json())
                .then((data) => console.log(data))
                .catch((err) => console.log(err));

          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
        window.location.href = window.location.href;
      })

    
}

function modifyTours(value){
  sessionStorage.setItem('modifyId',value);
  console.log(value)
  window.location.href = '../html/modifyTour.html';
}

