package org.generation.QuickTrip.reservations;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface reservationRepository extends JpaRepository<reservation, Long> {
	@Query("SELECT d FROM reservation d WHERE d.date=?1")
	Optional<reservation>findByDate (String date) ;
}
