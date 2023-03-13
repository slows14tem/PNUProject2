import "./View1.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { BsSearch } from "react-icons/bs";
import { getSelectList } from "../../API/funcAPI";
import { getSelectListRD } from "../../Component/Store/Store";
import Search from "./Search";
import SelectedList from "./SelectedList";

//검색 페이지
function View1Main() {

  //뒤로 갔을 떄 값 저장을 위해서 redux 사용
  let { SearchInfo } = useSelector((state) => { return state })
  const [visible, setVisible] = useState(false);

  let dispatch = useDispatch();

  //검색어 자동완성용 리스트 호출
  useEffect(() => {
    (async () => {
      await getSelectList()
        .then((res) => dispatch(getSelectListRD(res)))
        .catch(() => console.log("데이터가져오기 실패"))
    })();
  }, []);

  //selectbox에서 선택한 값이 있을때만 리스트(SelectedList)를 보여주기 위한 변수 visible
  useEffect(() => {
    if (SearchInfo === undefined) {
      setVisible(false)
    }
    else if (!SearchInfo[0]) {
      setVisible(false)
    }
    else {
      setVisible(true)
    }
  }, [SearchInfo])

  return (
    <>
      <div className="view1">
        <div className="view1Main">
          <h2 className="Searchh2"><BsSearch /> Search</h2>
          <Search />
          {visible && <SelectedList />}
        </div>
      </div>
    </>
  );
}
export default View1Main;