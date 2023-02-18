package com.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.domain.leadtime;
import com.project.persistence.DataRepository;

@Service
public class DataServiceImpl implements DataService{
	
	@Autowired
	private DataRepository dataRepo;
	
	public List<leadtime> getData(){
		return dataRepo.findAll();
	}

}
