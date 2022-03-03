package org.generation.QuickTrip.tour;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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
@RequestMapping(path="/api/tour/")
@CrossOrigin(origins="*")
public class tourController {

    private final tourService tService;

    @Autowired
	public tourController(tourService tService) {
		this.tService = tService;
	}//constructor
    @GetMapping
    public List<tour> getTour(){
        return tService.getTours();
    }//getTours

    @GetMapping(path = "{tourId}")
    public tour getTour(@PathVariable("tourId") Long tourId){
		return tService.getTour(tourId);
		
	}//getTour
    
    @DeleteMapping(path="{tourId}")
	public void deleteTour(@PathVariable("tourId") Long tourId) {
		tService.deleteTour(tourId);
	}//deleteTour
	
	@PostMapping
	public void addTour(@RequestBody tour tour) {
		tService.addTour(tour);
	}//addTour
	
	@PutMapping(path="{tourId}")
    public void updateTour(@PathVariable("tourId") Long tourId,
    		@RequestParam(required=false) String name, 
    		@RequestParam(required=false) String location,
    		@RequestParam(required=false) String category,
    		@RequestParam(required=false) String image,
    		@RequestParam(required=false) String image_two,
    		@RequestParam(required=false) String image_three,
    		@RequestParam(required=false) Long price,
    		@RequestParam(required=false) String about,
    		@RequestParam(required=false) String city,
    		@RequestParam(required=false) Long rating,
    		@RequestParam(required=false) Long reviews_num) {
		tService.updateTour(tourId, name, location, category, image, image_two, image_three, price, about, city, rating, reviews_num);
		
	}

}