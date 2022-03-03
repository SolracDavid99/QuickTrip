package org.generation.QuickTrip.user;

import java.util.List;
import java.util.Optional;
import org.generation.QuickTrip.utils.SHAUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class userService {
	private final userRepository  userRep;
	
	@Autowired
	public userService(userRepository userRep) {
		this.userRep = userRep;
		System.out.println(userRep);
		
	}//constructor
	
		public List<user> getUsers(){
			return userRep.findAll();

		}//get Users

		public user getUser(Long userId) {
			return userRep.findById(userId).orElseThrow(() -> new IllegalStateException("El Usuario con el id "+ userId +" no existe."));

		}//getuser
	
		public void deleteUser(Long userId) {
			if (userRep.existsById(userId)) {
				userRep.deleteById(userId);
			}//
			
		}// deleteuser
		
		public void addUser(user use) {
			Optional<user> userByName = userRep.findByuser_name(use.getUser_name());
			if(userByName.isPresent()) {
				throw new IllegalStateException("El Usuario con el nombre [ "+use.getUser_name()+" ] ya existe.");
			}else {
				use.setPassword( SHAUtil.createHash(use.getPassword()) );
				userRep.save(use);
			}
			
		}//adduser
		
		public void updateuser(Long userId, String user_name, String email, String password, String first_name, String last_name, String phone, boolean admin, String date) {
			if (userRep.existsById(userId)) { 
				user p = userRep.getById(userId);
				if (user_name != null) p.setUser_name(user_name); 
				if (email != null) p.setEmail(email);
				if (password != null) p.setPassword(password);
				if (first_name != null) p.setFirst_name(first_name);
				if (last_name != null) p.setLast_name(last_name);
				if (phone != null) p.setPhone(phone);
				//if (admin != null) p.setAdmin(admin);
				if (date !=null) p.setDate(date);
				userRep.save(p);
			}else {
				System.out.println("No existe el id "+userId);
				System.err.println("*No existe el id "+userId);
			}// if 		
			
		} // updateuser

		public boolean login(String user_name, String password) {
			boolean res =false;
			Optional<user> u = userRep.findByuser_name(user_name);
			if(u.isPresent()) {
				System.out.println("Password SHA: " + SHAUtil.createHash(password));
					if (SHAUtil.verifyHash(password, u.get().getPassword())) {
						res=true;
					}
			
		}
			return res;
		}//login
}
