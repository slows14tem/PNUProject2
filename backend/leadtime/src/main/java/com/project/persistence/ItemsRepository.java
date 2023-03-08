package com.project.persistence;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.project.domain.Items;

public interface ItemsRepository extends JpaRepository<Items, Long> {
	
	@Query("select i " +
            "from Items i " +
            "where i.machinery like %:machinery% "
            + "group by i.items")
	List<Items> findByMachineryContaining(@Param("machinery") String machinery);
	
	@Query("select i " +
            "from Items i " +
            "where i.items like %:items% "
            + "group by i.items")
	List<Items> findByItemsContaining(@Param("items") String items);
	
	@Query("select i " +
            "from Items i " +
            "where i.part1 like %:part1% "
            + "group by i.items")
	List<Items> findByPart1Containing(@Param("part1") String part1);
	
	@Query("select i " +
            "from Items i " +
            "where i.clients like %:clients% "
            + "group by i.items")
	List<Items> findByClientsContaining(@Param("clients") String clients);

}
