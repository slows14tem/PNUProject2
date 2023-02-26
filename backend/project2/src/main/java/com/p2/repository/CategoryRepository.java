package com.p2.repository;

import java.util.List;

import org.hibernate.metamodel.model.convert.spi.JpaAttributeConverter;

import com.p2.domain.CategoryVO;

public interface CategoryRepository extends JpaAttributeConverter<CategoryVO, String> {


	List<CategoryVO> getCategoryList();

}
