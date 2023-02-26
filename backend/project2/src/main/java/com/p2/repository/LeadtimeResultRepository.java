package com.p2.repository;

import java.util.List;

import org.hibernate.metamodel.model.convert.spi.JpaAttributeConverter;

import com.p2.domain.LeadtimeResultVO;
import com.p2.domain.LogVO;
import com.p2.domain.PastLeadtimeVO;

public interface LeadtimeResultRepository extends JpaAttributeConverter<LeadtimeResultVO, String> {

	List<LeadtimeResultVO> getLeadtime(LeadtimeResultVO leadResult);

	void addLog(LogVO log);

	List<LogVO> getLog();

	List<PastLeadtimeVO> getPastLeadtime(PastLeadtimeVO original);

}
