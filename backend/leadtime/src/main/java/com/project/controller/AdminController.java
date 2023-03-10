package com.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.dto.ItemsDto;
import com.project.service.DataService;

@RestController
public class AdminController {
	//관리자 페이지용 API(현재 카테고리, 리드타임 예측한 데이터 입력 이외에 관리자용 기능 개발 중단)
	@Autowired
	private DataService dataService;
	
	//아이템 추가(admin 화면)
	@PostMapping("/data/additem")
	public void addItem(@RequestBody ItemsDto.Request items) {
		dataService.addItem(items);
	}

}
