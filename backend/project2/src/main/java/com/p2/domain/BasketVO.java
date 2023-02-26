package com.p2.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class BasketVO {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String email;
	private String subjects;
	private String machinery;
	private String assembly;
	private String item;
	private String part1;
	private String currency;
	private String control_no;

	public BasketVO() {
		// TODO Auto-generated constructor stub
	}

	public BasketVO(String email, String subjects, String machinery, String assembly, String item, String part1,
			String currency, String control_no) {
		super();
		this.email = email;
		this.subjects = subjects;
		this.machinery = machinery;
		this.assembly = assembly;
		this.item = item;
		this.part1 = part1;
		this.currency = currency;
		this.control_no = control_no;
	}

	@Override
	public String toString() {
		return "BasketVO [email=" + email + ", subjects=" + subjects + ", machinery=" + machinery + ", assembly="
				+ assembly + ", item=" + item + ", part1=" + part1 + ", currency=" + currency + ", control_no="
				+ control_no + "]";
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
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

	public String getCurrency() {
		return currency;
	}

	public void setCurrency(String currency) {
		this.currency = currency;
	}

	public String getControl_no() {
		return control_no;
	}

	public void setControl_no(String control_no) {
		this.control_no = control_no;
	}

}