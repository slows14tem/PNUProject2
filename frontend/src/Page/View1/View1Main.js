import React, { useState, createContext, useEffect } from "react";
import SelectBox from "./SelectBox";

export const AppContext = createContext();

function View1Main() {
  const [lead, setLead] = useState();
  const [visible, setVisible] = useState(false);

  //selectbox에서 선택한 값이 있을때만 리스트를 보여주기 위한 변수 visible
  useEffect(() => {
    console.log(lead)
    if (lead === undefined) {
      setVisible(false)
    }
    else {
      if (visible === false) { setVisible(true) }
      else setVisible(true)
    }

  }, [lead])

  return (
    <AppContext.Provider value={[lead, setLead]}>
      <SelectBox />
      {visible && <div>
        {lead}
      </div>}
    </AppContext.Provider>
  );
}
export default View1Main;