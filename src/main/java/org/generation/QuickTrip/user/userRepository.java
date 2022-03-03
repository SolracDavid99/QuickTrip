package org.generation.QuickTrip.user;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
public interface userRepository extends JpaRepository<user, Long> {
	@Query("SELECT p FROM user p WHERE p.user_name=?1")
	Optional<user> findByuser_name (String user_name);


}
