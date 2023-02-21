import { useLocation } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { getSelectList } from "../../API/funcAPI";

//과거 데이터 출력 페이지
//과거데이터, 

function View2Main() {

  const location = useLocation();
  const [data, setData] = useState(location.state);
  const [datas, setdatas] = useState();

  useEffect(()=>{
    (async () => {
      await getSelectList()
        .then((res) => {
          let items = [];
          setdatas(res.map((item)=>{
            if(item.items === data.items){
              items.push(item);
              console.log("items", item);
            }
          }));
        });
    })();
  },[])

  // useEffect(()=>{
  //   setdatas(datas?.filter((item)=>item.includes(data.items)))
  // },[datas])
  

  return (
    <>
      <div>
        {data.machinery} > {data.items} > {data.part1} 상품의 최근 리드타임 내역
        {console.log(data)}
        {/* {console.log(datas)} */}
      </div>

    </>
  );
}
export default View2Main