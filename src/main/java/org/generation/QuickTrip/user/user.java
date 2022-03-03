package org.generation.QuickTrip.user;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name ="user")
public class user {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id", unique = true, nullable = false)
	private Long id;
    private String user_name;
    private String email;
    private String password;
    private String first_name;
    private String last_name;
	private String phone;
    private boolean admin;
    private String date;
    //private static int total=0;
    
    public user() {
		// TODO Auto-generated constructor stub
	}
    
	public user(Long id, String user_name, String email, String password, String first_name, String last_name, String phone,
			boolean admin, String date) {
		super();
		//total ++; 
		//this.id = total;
		this.id = id;
		this.user_name = user_name;
		this.email = email;
		this.password = password;
		this.first_name = first_name;
		this.last_name = last_name;
		this.phone = phone;
		this.admin = admin;
		this.date = date;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}


	public String getUser_name() {
		return user_name;
	}

	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}


	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}


	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public boolean isAdmin() {
		return admin;
	}

	public void setAdmin(boolean admin) {
		this.admin = admin;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	@Override
	public String toString() {
		return "user [id=" + id + ", userName=" + user_name + ", email=" + email + ", password=" + password
				+ ", firstName=" + first_name + ", lastName=" + last_name + ", phone=" + phone + ", admin=" + admin
				+ ", date=" + date + "]";
	}
    
    
}
