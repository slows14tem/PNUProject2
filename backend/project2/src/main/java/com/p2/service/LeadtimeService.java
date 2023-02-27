package com.p2.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.p2.domain.LeadtimeResultVO;
import com.p2.domain.LogVO;
import com.p2.domain.PastLeadtimeVO;
import com.p2.repository.LeadtimeResultRepository;

@Service
public class LeadtimeService {

	@Autowired
	private LeadtimeResultRepository leadtimerepository;

	public List<LeadtimeResultVO> getLeadtime(LeadtimeResultVO leadResult) {
		return leadtimerepository.getLeadtime(leadResult);
	}

	public List<PastLeadtimeVO> getPastLeadtime(PastLeadtimeVO original) {
		return leadtimerepository.getPastLeadtime(original);
	}

	public void addLog(LogVO log) {
		leadtimerepository.addLog(log);
	}

	public List<LogVO> getLog() {
		return leadtimerepository.getLog();
	}

}
