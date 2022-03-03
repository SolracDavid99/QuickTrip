var tables='';
reserva()

function reserva() {
    fetch('http://localhost:8080/api/reservation/')
    .then(respuesta => respuesta.json())
    .then(reservation => {
        var value = id();
        //value -= 1;
        console.log(value);
        for (let i = 0; i < reservation.length; i++){
            //if(tour[i].category=="Recreative")
                tables += 
                `<tr>
                <td>${reservation[i].id}</td>
                <td>${reservation[i].tour_id}</td>
                <td>${reservation[i].date}</td>
                <td>${reservation[i].num_reservations}</td>
                <td>$ ${reservation[i].total_price} MXN</td>
                <td><button type="button" class="btn-danger btn-sm" onclick= "deleteReservation(${reservation[i].id})" id="contenido">Remove reservation</button></td>
            </tr>`;
        }
                
        document.getElementById('tables').innerHTML = tables;
    })
    .catch(err=>console.log(err))
    }
    console.log(id());


    function id(){
        var num =parseInt(sessionStorage.getItem('id'));
        return num;

    }

    function deleteReservation(idDelete) {


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
    
                fetch("http://localhost:8080/api/reservation/" + idDelete, {
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