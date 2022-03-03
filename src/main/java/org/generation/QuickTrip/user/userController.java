package org.generation.QuickTrip.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/user/")
public class userController {

    private final userService uService;

	@Autowired
	public userController(userService uService) {
		this.uService = uService;
	}//constructor
	@GetMapping
	public List<user> getUsers(){
		return uService.getUsers();
	}

	@GetMapping(path = "{userId}")
    public user getUser(@PathVariable("userId") Long userId){
		return uService.getUser(userId);
		
	}//getUsers

	@DeleteMapping(path="{userId}")
	public void deleteTour(@PathVariable("userId") Long userId) {
		uService.deleteUser(userId);
	}//deleteUser
	
	@PostMapping
	public void addUser(@RequestBody user user) {
		uService.addUser(user);
		
	}//addUser
	
	@PutMapping(path="{userId}")
    public void updateuser(@PathVariable("userId") Long userId,
    		@RequestParam(required=false) String user_name, 
    		@RequestParam(required=false) String email,
    		@RequestParam(required=false) String password,
    		@RequestParam(required=false) String first_name,
    		@RequestParam(required=false) String last_name,
    		@RequestParam(required=false) String phone,
    		@RequestParam(required=false) boolean admin,
    		@RequestParam(required=false) String date) {
		uService.updateuser (userId, user_name, email,
				password, first_name, last_name, phone, admin, date);
	}// updateuser
}
