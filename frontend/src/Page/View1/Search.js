import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "./View1Main";
import { getSelectList } from "../../API/funcAPI";

function Search(){

  const [datas, setdatas] = useState();
  const [data, setData] = useState(null);
  const [selected, setSelected] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [lead, setLead] = useContext(AppContext);

  useEffect(() => {
    (async () => {
      await getSelectList()
        .then((res) => {
          //모든 데이터를 datas에 넣기
          setdatas(res);
        })
    })();
  }, []);

  //검색조건 리스트
  const selectList = ["===검색항목선택===", "발주처", "부품대분류", "부품명", "부품번호"];

  //검색조건(selectList)을 선택하면 발생 이벤트
  const handleSelect = (e) => {
    //선택한 조건 저장
    setSelected(e.target.value);

    //조건 선택하면 자동완성목록 띄우기 위한 데이터 정제(선택된 필드 추출 및 중복제거)
    if (e.target.value === "발주처") {
      setData([...new Set(datas.map((item) => item.baljucheo))]);
    } else if (e.target.value === "부품대분류") {
      setData([...new Set(datas.map((item) => item.machinery))]);
    } else if (e.target.value === "부품명") {
      setData([...new Set(datas.map((item) => item.items))]);
    } else {
      setData([...new Set(datas.map((item) => item.part1))]);
    }
  };

  //  options라는 배열에 중복제거한 값 저장
  let options = [];

  for (let item in data) {
    options.push(data[item]);
  }

  //  options배열을 내림차순 정렬
  options.sort();

  //검색창에 입력값이 변할때 발생하는 이벤트(입력)
  const handleChange = (e) => {
    //현재 검색어를 저장
    setSelectedOption(e.target.value);
  };

  //검색항목이 변경될때마다 검색창 리셋
  useEffect(()=>{
    setSelectedOption("")
  }, [data])

  //검색어 입력 후 버튼 클릭할때 이벤트
  const searchData = (e) => {
    e.preventDefault();
    //중복제거 값에서 검색결과만 출력(검색어가 포함된 모든 단어 포함 가능)
    setSearchResults(
      options.filter((option) => option.includes(selectedOption))
    );
  };

  useEffect(()=>{
    const output = [];
    output.push(selected)
    output.push(selectedOption);
    setLead(output);
  },[searchResults])

  return(
    <>
      <div>
          <select onChange={handleSelect}>
            {selectList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
          <form onSubmit={searchData}>
            {/* 입력시 대소문자 구분 필요 */}
            <input
              list="options"
              value={selectedOption}
              onChange={handleChange}
            />
            <datalist id="options">
              {/* options라는 배열의 요소를 option태그 의 value 값에 넣기 */}
              {options.map((option) => (
                <option key={option} value={option} />
              ))}
            </datalist>
            <button type="submit">검색</button>
          </form>
        </div>
    </>
  );
}
export default Search