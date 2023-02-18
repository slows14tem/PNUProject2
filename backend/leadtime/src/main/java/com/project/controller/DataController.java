package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.domain.leadtime;
import com.project.service.DataService;

@RestController
public class DataController {
	
	@Autowired
	private DataService dataService;
	
	@GetMapping("/data/get")
	public List<leadtime> getData(){
		return dataService.getData();
	}

}
