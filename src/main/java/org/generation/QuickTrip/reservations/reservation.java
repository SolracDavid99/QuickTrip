package org.generation.QuickTrip.reservations;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="reservation")
public class reservation {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id", unique = true, nullable = false)
    private Long id;
    private Integer num_reservations;
    private String date;
    private Double total_price;
    
    public reservation() {
    	
    }//constructor vacio
    
	public reservation(Integer num_reservations, String date, Double total_price) {
		super();
		this.num_reservations = num_reservations;
		this.date = date;
		this.total_price = total_price;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Integer getNum_reservations() {
		return num_reservations;
	}

	public void setNum_reservations(Integer num_reservations) {
		this.num_reservations = num_reservations;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public Double getTotal_price() {
		return total_price;
	}

	public void setTotal_price(Double total_price) {
		this.total_price = total_price;
	}
    
    
    

}