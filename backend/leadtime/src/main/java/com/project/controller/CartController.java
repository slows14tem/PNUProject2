package com.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.project.dto.BasketDto;
import com.project.dto.PaymentDto;
import com.project.service.DataService;

@RestController
public class CartController {
	//장바구니 관련 API
	@Autowired
	private DataService dataService;
	
	//장바구니 추가
	@PostMapping("/data/addbasket")
	public void addBasket(@RequestBody int[][] basket, BasketDto.Request dto) {	//장바구니 추가할 때 dto사용해봄
		dataService.addBasket(basket, dto);
	}
	
	//아이디별로 장바구니 목록 들고오기
	@GetMapping("/data/getbasket")
	public String getBasket(Authentication authentication){	//로그인 정보가 담겨있는 Authentication 사용
		try {
			return dataService.getBasket(authentication);
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	//장바구니 삭제
	@PostMapping("/data/delbasket")
	public void delBasket(@RequestBody int[] idNum) {
		dataService.delBasket(idNum);
	}
	
	//장바구니에서 구매 기능용(현재 사용 안됨)
	@PostMapping("/data/addPayment")
	public void addPayment(@RequestBody int[] idNum, PaymentDto.Request dto) {
		dataService.addPayment(idNum, dto);
	}

}
