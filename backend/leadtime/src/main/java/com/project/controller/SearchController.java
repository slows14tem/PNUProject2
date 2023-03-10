package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.domain.Items;
import com.project.service.DataService;

@RestController
public class SearchController {
	//검색기능 관련 API
	@Autowired
	private DataService dataService;
	
	//자동완성기능용 전체 데이터 호출(필요한 데이터만 호출하도록 수정 필요)
	@GetMapping("/data/get")
	public List<Items> getData(){
		return dataService.getData();
	}
	
	//검색한 데이터 리스트 호출
	@PostMapping("/data/search")
	public List<Items> getResult(@RequestBody String[] search){
		return dataService.getResult(search);
	}

}
