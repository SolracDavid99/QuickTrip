package org.generation.QuickTrip.tour;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface tourRepository extends JpaRepository<tour, Long>{
	@Query("SELECT t FROM tour t WHERE t.name=?1")
	Optional<tour> findByName (String name);

}
