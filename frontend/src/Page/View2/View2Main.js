import { useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import Graph from "./Graph";

//과거 데이터 출력 페이지
//추천 목록 출력

function View2Main() {

  const location = useLocation();
  let { SelectList } = useSelector((state) => { return state })
  const [data, setData] = useState(location.state);
  const [oldList, setOldList] = useState(null);

  useEffect(()=>{
    const oldData = [];
    SelectList.map((item)=>{
    if(item.machinery === data.machinery && item.items === data.items && item.part1 === data.part1){
      oldData.push({
        "x": item.leadtime, 
        "y": item.balju
      })
    }});
    setOldList(oldData);
    
  },[])

  

  return (
    <>
      <div>
        {data.machinery} / {data.items} / {data.part1} 상품의 최근 리드타임 내역
        <Graph props={oldList} />
        {/* 해당 상품의 관련 상품 추천 추가 */}
      </div>

    </>
  );
}
export default View2Main