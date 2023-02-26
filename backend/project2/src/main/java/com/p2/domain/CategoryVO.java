package com.p2.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class CategoryVO {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String subjects;
	private String machinery;
	private String assembly;
	private String item;
	private String part1;

	public CategoryVO() {
		// TODO Auto-generated constructor stub
	}

	public CategoryVO(String subjects, String machinery, String assembly, String item, String part1) {
		super();
		this.subjects = subjects;
		this.machinery = machinery;
		this.assembly = assembly;
		this.item = item;
		this.part1 = part1;
	}

	@Override
	public String toString() {
		return "CategoryVO [subjects=" + subjects + ", machinery=" + machinery + ", assembly=" + assembly + ", item="
				+ item + ", part1=" + part1 + "]";
	}

	public String getSubjects() {
		return subjects;
	}

	public void setSubjects(String subjects) {
		this.subjects = subjects;
	}

	public String getMachinery() {
		return machinery;
	}

	public void setMachinery(String machinery) {
		this.machinery = machinery;
	}

	public String getAssembly() {
		return assembly;
	}

	public void setAssembly(String assembly) {
		this.assembly = assembly;
	}

	public String getItem() {
		return item;
	}

	public void setItem(String item) {
		this.item = item;
	}

	public String getPart1() {
		return part1;
	}

	public void setPart1(String part1) {
		this.part1 = part1;
	}

}
