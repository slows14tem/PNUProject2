package com.p2.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.p2.domain.CategoryVO;
import com.p2.service.CategoryService;

@RestController
public class CategoryController {

	@Autowired
	private CategoryService categoryService;

	// 검색기능 구현을 위한 분류별 리스트 출력
	@GetMapping("/data/selectlist")
	public List<CategoryVO> getCategoryList() {
		return categoryService.getCategoryList();
	}

}
