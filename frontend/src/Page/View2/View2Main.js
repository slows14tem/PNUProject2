import { useLocation } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";

//과거 데이터 출력 페이지

function View2Main(props) {

  const location = useLocation();
  const [data, setData] = useState(location.state);

  return (
    <>
      <div>
        안녕안녕
        {console.log(location)}
      </div>
    </>
  );
}
export default View2Main