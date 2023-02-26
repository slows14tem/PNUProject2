package com.p2.domain;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Builder;
@Builder
@Entity
public class PastLeadtimeVO {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private String machinery;
	private String items; // 청구 품목
	private String part1; // Part No.1
	private int leadtime;
	private LocalDate balju; // 발주일
	private String baljucheo; // 발주처
	private String gyeonjeokhwapye; // 견적화폐
	private int gyeonjeokdanga; // 견적 단가
	private int baljusuryang; // 발주 수량
	private String baljugeumaek; // 발주 금액 int로도 String으로도 잘동 안됨

	public PastLeadtimeVO() {
		// TODO Auto-generated constructor stub
	}

	public PastLeadtimeVO(String machinery, String items, String part1, int leadtime, LocalDate balju, String baljucheo,
			String gyeonjeokhwapye, int gyeonjeokdanga, int baljusuryang, String baljugeumaek) {
		super();
		this.machinery = machinery;
		this.items = items;
		this.part1 = part1;
		this.leadtime = leadtime;
		this.balju = balju;
		this.baljucheo = baljucheo;
		this.gyeonjeokhwapye = gyeonjeokhwapye;
		this.gyeonjeokdanga = gyeonjeokdanga;
		this.baljusuryang = baljusuryang;
		this.baljugeumaek = baljugeumaek;
	}

	@Override
	public String toString() {
		return "PastLeadtimeVO [machinery=" + machinery + ", items=" + items + ", part1=" + part1 + ", leadtime="
				+ leadtime + ", balju=" + balju + ", baljucheo=" + baljucheo + ", gyeonjeokhwapye=" + gyeonjeokhwapye
				+ ", gyeonjeokdanga=" + gyeonjeokdanga + ", baljusuryang=" + baljusuryang + ", baljugeumaek="
				+ baljugeumaek + "]";
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

	public int getLeadtime() {
		return leadtime;
	}

	public void setLeadtime(int leadtime) {
		this.leadtime = leadtime;
	}

	public LocalDate getBalju() {
		return balju;
	}

	public void setBalju(LocalDate balju) {
		this.balju = balju;
	}

	public String getBaljucheo() {
		return baljucheo;
	}

	public void setBaljucheo(String baljucheo) {
		this.baljucheo = baljucheo;
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

	public int getBaljusuryang() {
		return baljusuryang;
	}

	public void setBaljusuryang(int baljusuryang) {
		this.baljusuryang = baljusuryang;
	}

	public String getBaljugeumaek() {
		return baljugeumaek;
	}

	public void setBaljugeumaek(String baljugeumaek) {
		this.baljugeumaek = baljugeumaek;
	}

}
