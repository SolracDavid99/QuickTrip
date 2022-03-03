package org.generation.QuickTrip.tour;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="tour")
public class tour {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id", unique = true, nullable = false)
	private Long id;
    private String name;
    private String location;
    private String category;
    private String image;
    private String image_two;
    private String image_three;
    private Long price;
    private String about;
    private String city;
    private Long rating;
    private Long reviews_num;
	
    
    public tour() {
    	
    }//constructor vacio
    
    public tour(Long id, String name, String location, String category, String image, String image_two, String image_three, Long price, String about,
			String city, Long rating, Long reviews_num) {
		super();
		this.id = id;
		this.name = name;
		this.location = location;
		this.category = category;
		this.image = image;
		this.image_two = image_two;
		this.image_three = image_three;
		this.price = price;
		this.about = about;
		this.city = city;
		this.rating = rating;
		this.reviews_num = reviews_num;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}
	

	public String getImage_two() {
		return image_two;
	}

	public void setImage_two(String image_two) {
		this.image_two = image_two;
	}

	public String getImage_three() {
		return image_three;
	}

	public void setImage_three(String image_three) {
		this.image_three = image_three;
	}

	public Long getPrice() {
		return price;
	}

	public void setPrice(Long price) {
		this.price = price;
	}

	public String getAbout() {
		return about;
	}

	public void setAbout(String about) {
		this.about = about;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public Long getRating() {
		return rating;
	}

	public void setRating(Long rating) {
		this.rating = rating;
	}

	public Long getReviews_num() {
		return reviews_num;
	}

	public void setReviews_num(Long reviews_num) {
		this.reviews_num = reviews_num;
	}

	@Override
	public String toString() {
		return "tour [id=" + id + ", name=" + name + ", location=" + location + ", category=" + category + ", image="
				+ image + ", image_two=" + image_two + ", image_three=" + image_three + ", price=" + price + ", about="
				+ about + ", city=" + city + ", rating=" + rating + ", reviews_num=" + reviews_num + "]";
	}

    
}
