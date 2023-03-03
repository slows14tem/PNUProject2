import "./View3.css"
import "react-calendar/dist/Calendar.css";
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getBasketListRD } from "../../Component/Store/Store";
import { predictAll } from "../../API/funcAPI";
import { Link } from "react-router-dom";
import moment from 'moment';
import Calendar from 'react-calendar';


function BasketDate() {

  let dispatch = useDispatch();
  let { Basket } = useSelector((state) => { return state })
  const [checkItems, setCheckItems] = useState([]);
  const [data, setData] = useState();
  const [category, setCategory] = useState();
  const [orderDue, setOrderDue] = useState();
  const [value, onChange] = useState(new Date());
  const [lead, setLead] = useState();

  const fixPrice = useCallback(price => {
    return parseInt(price.toFixed(0)).toLocaleString();
  }, []);

  //main에서 통신 호출된 장바구니를 state에 담기
  useEffect(() => {
    // setData(Basket);

    (async () => {
      await predictAll(Basket)
        .then((res) => setData(res))
        .catch((error) => console.log(error))
    })();

    setCategory(Basket.map((item) => item.items.category));
  }, [Basket])

  //체크박스 선택한 아이템을 redux에 입력
  useEffect(() => {
    dispatch(getBasketListRD(checkItems));
  }, [checkItems])

  //통신한 데이터를 key2별로 sort
  const key2 = [...new Set(category)];
  key2.sort()

  // 체크박스 단일 선택
  const handleSingleCheck = (checked, id) => {
    
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckItems(prev => [...prev, id]);
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  const handleAllCheck = (checked) => {
    if (checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray = [];
      data.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
    }
    else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItems([]);
    }
  }

  //체크박스 선택한 행 삭제
  const removeRow = () => {
    setData(data.filter((item) =>
      !checkItems.includes(item.id)
    ))
  }

  useEffect(() => {
    const possible = [];
    const impossible = [];
    const urgent = [];
    Basket.map((i) => {
      if (ramainTime - i.items.leadtime > 7) {
        possible.push(i.items.id)
      } else if (ramainTime - i.items.leadtime > 0) {
        urgent.push(i.items.id)
      } else {
        impossible.push(i.items.id)
      }
    })
    setOrderDue(
      <ul className="ox">
        <li>⭕ 주문 가능 : {possible.length}</li>
        <li className="li">❗❗ 주문 임박 : {urgent.length}</li>
        <li>❌ 주문 불가 : {impossible.length}</li>
      </ul>
    )
  }, [value])

  //남은 날짜 계산(목표 날짜 - 오늘 날짜)
  //아래 테이블에서 (위의 남은 날짜 - 리드타임)해서 몇일 안에 발주해야하는지 계산
  const today = moment(new Date());
  const selectDate = moment(value);
  const ramainTime = Math.ceil(moment.duration(selectDate.diff(today)).asDays());

  const sortByMachinery = (params) => {
    //입력된 params 별로 분류
    setData([...data].sort((a, b) => a['items'][`${params}`].localeCompare(b['items'][`${params}`])));    
  };



  return (
    <>
      <div className="View3Main">
        <div className="calender">
          <Calendar className="calendar" locale="en-EN" onChange={onChange} value={value} />
          {orderDue}
        </div>
        <div className="OrderList">
        {key2.map((kitem, index) =>
          <div className="byCategory" key={index}>
            <div className="categoryName"> {kitem} </div>
            <table className="orderTable">
              <thead>
                <tr>
                  <th></th>
                  <th className="th2">카테고리</th>
                  <th className="th2" onClick={(e)=>sortByMachinery('machinery')}>Machinery</th>
                  <th className="th2" onClick={(e)=>sortByMachinery('items')}>청구품목</th>
                  <th className="th2" onClick={(e)=>sortByMachinery('part1')}>Part.No</th>
                  <th className="th2" onClick={(e)=>sortByMachinery('clients')}>발주처</th>
                  <th className="th2" onClick={(e)=>sortByMachinery('leadtime')}>리드타임(일)</th>
                  <th className="th2" onClick={(e)=>sortByMachinery('currency')}>견적화폐</th>
                  <th className="th2" onClick={(e)=>sortByMachinery('esti_unit_price')}>견적단가</th>
                  <th className="th1"></th>
                </tr>
              </thead>
              <tbody>
                {data.filter((item) => kitem.includes(item.items.category))
                  .map((item, index) => (
                    <tr key={index}>
                      {/* 똑같은 항목이 여러개 들어가면 전부 다 체크되는 상황 */}
                      <td><input type={'checkbox'} onChange={(e) =>{
                        if(ramainTime - item.items.leadtime<=0){
                          return alert("주문 불가능")
                        };
                        handleSingleCheck(e.target.checked, item.id)}}
                        checked={checkItems.includes(item.id) ? true : false}></input></td>
                      <td>{item.items.category}</td>
                      <td><Link className="listLink" to='/view2' state={item.items}>{item.items.machinery}</Link></td>
                      <td>{item.items.items}</td>
                      <td>{item.items.part1}</td>
                      <td>{item.items.clients}</td>
                      <td>{item.predictLead}</td>
                      <td>{item.items.currency}</td>
                      <td>{fixPrice(parseInt(item.items.esti_unit_price))}</td>
                      <td className="th1">{ramainTime - item.items.leadtime > 7 ? "" :
                    ramainTime - item.items.leadtime > 0 ? `${ramainTime - item.items.leadtime}일이내 주문 필요` : "주문불가능"}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
            <div className="leadtimeByCategory">
              {/* 각 카테고리별 리드타임중 큰값 출력 */}
              {/* {kitem} */}
              <div> 총 {(data.filter((item) => kitem.includes(item.items.category))).length}개</div>
              <div>소요 예상일: {Math.max(...data.filter((item) => kitem.includes(item.items.category)).map((i) => i.items.leadtime))}(일)</div>
            </div>
          </div>
        )}
      </div>
        {/* <div className="dateList">
          <table className="dateTable">
            <thead>
              <tr className="thead">
                <th className="check"></th>
                <th onClick={sortByName} className="th1">카테고리</th>
                <th className="th1">Machinery</th>
                <th className="th1">청구품목</th>
                <th className="th1">Part.No</th>
                <th className="th1">발주처</th>
                <th className="th1">리드타임(일)</th>
                <th className="th1">견적화폐</th>
                <th className="th1">견적단가</th>
                <th className="th1"></th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => (
                <tr key={index}>
                  <td className="check"><input type={'checkbox'} onChange={(e) => handleSingleCheck(e.target.checked, item.id)}
                    checked={checkItems.includes(item.id) ? true : false}></input></td>
                  <td className="th1">{item.items.category}</td>
                  <td className="th1">{item.items.machinery}</td>
                  <td className="th1">{item.items.items}</td>
                  <td className="th1">{item.items.part1}</td>
                  <td className="th1">{item.items.clients}</td>
                  <td className="th1">{item.items.leadtime}</td>
                  <td className="th1">{item.items.currency}</td>
                  <td className="th1">{item.items.esti_unit_price}</td>
                   3일 이내면 "~일 이내 주문 필요", 날짜가 지나면 "주문불가능"으로 띄움  
                  <td className="th1">{ramainTime - item.items.leadtime > 7 ? "" :
                    ramainTime - item.items.leadtime > 0 ? `${ramainTime - item.items.leadtime}일이내 주문 필요` : "주문불가능"}</td>
                </tr>
              ))
              }
            </tbody>
          </table>
        </div> */}
      </div>
    </>
  );
}
export default BasketDate
