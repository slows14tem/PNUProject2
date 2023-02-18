package com.project.persistence;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.domain.leadtime;

public interface DataRepository extends JpaRepository<leadtime, Long> {

}
