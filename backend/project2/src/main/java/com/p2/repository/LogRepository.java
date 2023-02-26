package com.p2.repository;

import org.hibernate.metamodel.model.convert.spi.JpaAttributeConverter;

import com.p2.domain.LogVO;

public interface LogRepository extends JpaAttributeConverter<LogVO, Integer> {

}
