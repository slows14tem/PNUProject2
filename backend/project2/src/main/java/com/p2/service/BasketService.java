package com.p2.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.p2.domain.BasketVO;
import com.p2.domain.LeadtimeSearchVO;
import com.p2.repository.BasketRepository;
import com.p2.repository.LeadtimeSearchRepository;


@Service
public class BasketService {

	@Autowired
	private LeadtimeSearchRepository leadtimesearchrepository;
	@Autowired
	private BasketRepository basketrepository;
	
	public List<LeadtimeSearchVO> getSearch() {
		return leadtimesearchrepository.getSearch();
	}

	public void addBasket(BasketVO[] basket) {
		basketrepository.addBasket(basket);
		
	}

	public List<BasketVO> getBasket() {
		return basketrepository.getBasket();
	}
}