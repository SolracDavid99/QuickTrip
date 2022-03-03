package org.generation.QuickTrip.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(path="api/login")
public class LoginController {
		private final userService uService;
		@Autowired
		public LoginController(userService uService) {
			super();
			this.uService = uService;
		} 
		@PostMapping
		public String Login(@RequestBody user user) {
			String res = "Nombre o contraseña incorrectos";
			if (uService.login(user.getUser_name(), user.getPassword())) {
				res = "ok";
			}
			return res; 
		}
}
