package com.swe645.hw3;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="*")
public class Hw3Controller {
	
	@Autowired
	public Hw3Repository hw3r;
	
	//get endpoint
	@GetMapping("/getAllSurveys")
	public List<Hw3Model> getAllSurveys() {
		return hw3r.findAll();
	}
	
	//creating post endpoint by using PostMapping
	
	@PostMapping("/submitSurvey")
	public void submitSurvey(@RequestBody Hw3Model model) {
		hw3r.save(model);
	}
		
}
