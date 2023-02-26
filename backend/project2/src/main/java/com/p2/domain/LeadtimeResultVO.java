package com.p2.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class LeadtimeResultVO {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private String machinery;
	private String items;
	private String part1;
	private int leadtime_predicted;

	public LeadtimeResultVO() {
		// TODO Auto-generated constructor stub
	}

	public LeadtimeResultVO(String machinery, String items, String part1, int leadtime_predicted) {
		super();
		this.machinery = machinery;
		this.items = items;
		this.part1 = part1;
		this.leadtime_predicted = leadtime_predicted;
	}

	@Override
	public String toString() {
		return "LeadtimeResultVO [machinery=" + machinery + ", items=" + items + ", part1=" + part1
				+ ", leadtime_predicted=" + leadtime_predicted + "]";
	}

	public String getMachinery() {
		return machinery;
	}

	public void setMachinery(String machinery) {
		this.machinery = machinery;
	}

	public String getItems() {
		return items;
	}

	public void setItems(String items) {
		this.items = items;
	}

	public String getPart1() {
		return part1;
	}

	public void setPart1(String part1) {
		this.part1 = part1;
	}

	public int getLeadtime_predicted() {
		return leadtime_predicted;
	}

	public void setLeadtime_predicted(int leadtime_predicted) {
		this.leadtime_predicted = leadtime_predicted;
	}

}
