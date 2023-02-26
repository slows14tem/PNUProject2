package com.p2.domain;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class LogVO {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String machinery;
	private String items; // 청구 품목
	private String part1; // Part No.1
	private LocalDate logdate;

	public LogVO() {
		// TODO Auto-generated constructor stub
	}

	public LogVO(int id, String machinery, String items, String part1, LocalDate logdate) {
		super();
		this.id = id;
		this.machinery = machinery;
		this.items = items;
		this.part1 = part1;
		this.logdate = logdate;
	}

	@Override
	public String toString() {
		return "LogVO [id=" + id + ", machinery=" + machinery + ", items=" + items + ", part1=" + part1 + ", logdate="
				+ logdate + "]";
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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

	public LocalDate getLogdate() {
		return logdate;
	}

	public void setLogdate(LocalDate logdate) {
		this.logdate = logdate;
	}

}