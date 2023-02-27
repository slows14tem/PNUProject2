package com.p2.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class LeadtimeSearchVO {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String baljucheo;
	private String machinery;
	private String items; // 청구 품목
	private String part1;
	private String key2;
	private int leadtime_predicted;
	private String gyeonjeokhwapye; // 견적화폐
	private int gyeonjeokdanga; // 견적단가

	public LeadtimeSearchVO() {
		// TODO Auto-generated constructor stub
	}

	public LeadtimeSearchVO(int id, String baljucheo, String machinery, String items, String part1, String key2,
			int leadtime_predicted, String gyeonjeokhwapye, int gyeonjeokdanga) {
		super();
		this.id = id;
		this.baljucheo = baljucheo;
		this.machinery = machinery;
		this.items = items;
		this.part1 = part1;
		this.key2 = key2;
		this.leadtime_predicted = leadtime_predicted;
		this.gyeonjeokhwapye = gyeonjeokhwapye;
		this.gyeonjeokdanga = gyeonjeokdanga;
	}

	@Override
	public String toString() {
		return "LeadtimeSearchVO [id=" + id + ", baljucheo=" + baljucheo + ", machinery=" + machinery + ", items="
				+ items + ", part1=" + part1 + ", key2=" + key2 + ", leadtime_predicted=" + leadtime_predicted
				+ ", gyeonjeokhwapye=" + gyeonjeokhwapye + ", gyeonjeokdanga=" + gyeonjeokdanga + "]";
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getBaljucheo() {
		return baljucheo;
	}

	public void setBaljucheo(String baljucheo) {
		this.baljucheo = baljucheo;
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

	public String getKey2() {
		return key2;
	}

	public void setKey2(String key2) {
		this.key2 = key2;
	}

	public int getLeadtime_predicted() {
		return leadtime_predicted;
	}

	public void setLeadtime_predicted(int leadtime_predicted) {
		this.leadtime_predicted = leadtime_predicted;
	}

	public String getGyeonjeokhwapye() {
		return gyeonjeokhwapye;
	}

	public void setGyeonjeokhwapye(String gyeonjeokhwapye) {
		this.gyeonjeokhwapye = gyeonjeokhwapye;
	}

	public int getGyeonjeokdanga() {
		return gyeonjeokdanga;
	}

	public void setGyeonjeokdanga(int gyeonjeokdanga) {
		this.gyeonjeokdanga = gyeonjeokdanga;
	}

}
