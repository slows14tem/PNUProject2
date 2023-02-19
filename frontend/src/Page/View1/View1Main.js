import React, { useState, createContext, useEffect } from "react";
import { Link } from "react-router-dom";
import SelectBox from "./SelectBox";
import Search from "./Search";
import SelectedList from "./SelectedList";

//검색 페이지
//과거데이터에서 뒤로가기 눌렀을 때 리셋되어있는 현상 해결해야함
export const AppContext = createContext();
//useContext로도 랜더링 관리가 힘들어진다. Redux 사용할 필요 있어보임
function View1Main() {
  const [lead, setLead] = useState();
  const [visible, setVisible] = useState(false);

  //selectbox에서 선택한 값이 있을때만 리스트를 보여주기 위한 변수 visible
  useEffect(() => {
    if (lead === undefined) {
      setVisible(false)
    }
    else if (lead?.[0] === ""){
      setVisible(false)
    }
    else {
      if (visible === false) { setVisible(true) }
      else setVisible(true)
    }
  }, [lead])

  return (
    <AppContext.Provider value={[lead, setLead]}>
      {/* <SelectBox /> */}
      <Search />
      {visible && <SelectedList/>}
      <button><Link to='/view3'>장바구니 이동</Link></button>
    </AppContext.Provider>
  );
}
export default View1Main;