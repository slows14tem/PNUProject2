package com.p2.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.p2.domain.LeadtimeResultVO;
import com.p2.domain.LogVO;
import com.p2.domain.PastLeadtimeVO;
import com.p2.service.LeadtimeService;

@RestController
public class LeadtimeController {

	@Autowired
	private LeadtimeService leadtimeService;

	// 리드타임 예측 결과 출력(select page)
	@GetMapping("/data/leadtime")
	public List<LeadtimeResultVO> getLeadtime(LeadtimeResultVO leadResult) {
		return leadtimeService.getLeadtime(leadResult);
	}

	// 과거의 리드타임 정보 출력(visual page)
	@GetMapping("/data/past_leadtime")
	public List<PastLeadtimeVO> getPastLeadtime(PastLeadtimeVO original) {
		return leadtimeService.getPastLeadtime(original);
	}

	// 리드타임 예측 검색 log 저장
	@PostMapping("/data/searchlog")
	public void addLog(@RequestBody LogVO log) {
		leadtimeService.addLog(log);
	}

	// 리드타임 예측 검색 log 출력
	@GetMapping("/data/getlog")
	public List<LogVO> getLog() {
		return leadtimeService.getLog();
	}

}