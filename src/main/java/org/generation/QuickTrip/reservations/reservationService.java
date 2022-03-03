package org.generation.QuickTrip.reservations;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class reservationService {
    
	private final reservationRepository reservationRep;
	
	@Autowired
    public reservationService(reservationRepository reservationRep) {
		super();
		this.reservationRep = reservationRep;
	}

	public List<reservation> getReservations(){
        return reservationRep.findAll();
    }//getReservations

    public reservation getReservation(Long reservationId){
        return reservationRep.findById(reservationId).orElseThrow (()-> new IllegalStateException("There is not a reservation with the id: " + reservationId ) );
	}//getTour

    public void deleteReservation(Long reservationId) {
    	if (reservationRep.existsById(reservationId)) {
    		reservationRep.deleteById(reservationId);
		}		
	}//deleteReservation
    
    public void addReservation(reservation reservation) {
		Optional<reservation> reservationByDate = reservationRep.findByDate(reservation.getDate());
		if(reservationByDate.isPresent()) {
			throw new IllegalStateException("Your alrready have a reservation for: " + reservation.getDate());
		}
		reservationRep.save(reservation);
	}//addReservation
    

	public void updateReservation(Long reservationId, String date, Integer num_reservations, Double total_price) {
		if(reservationRep.existsById(reservationId)) {
			reservation res = reservationRep.getById(reservationId);
			if (date != null) res.setDate(date);
			if (num_reservations != null) res.setNum_reservations(num_reservations);
			if (total_price != null) res.setTotal_price(total_price);
			reservationRep.save(res);
		}
		
	}//updateReservation

}
