import { useState, useEffect } from "react";
import { recommendation } from "../../API/funcAPI";

// 현재 추천 사용 못함(AWS 리소스 문제로 추정)
function Recommendation(props) {
  const [recommendList, setRecommendList] = useState();
  const [listStatus, setListStatus] = useState();

  useEffect(() => {
    const data = { "items": props['props'].items };
    (async () => {
      await recommendation(data)
        .then((res) => setRecommendList(res))
        .catch((error) => console.log(error))
    })();
  }, [])

  useEffect(() => {
    if (recommendList === undefined) {
      setListStatus(<div className="load">추천 결과를 호출 중입니다.</div>)
    } else if (!recommendList) {
      setListStatus(<div className="none">추천 상품이 없습니다.</div>)
    } else {
      setListStatus(
        <div>
          <table className="recTable">
            <thead>
              <tr>
                <th>Machinery</th>
                <th>Assembley</th>
                <th>청구품목</th>
                <th>PartNo</th>
              </tr>
            </thead>
            <tbody>
              {recommendList?.map((item, index) => (
                <tr key={index} >
                  <td>{item.machinery}</td>
                  <td>{item.Assembly}</td>
                  <td>{item.items}</td>
                  <td>{item.part1}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    }
  }, [recommendList])

  return (
    <div className="rec">
      <h4 className="announce">해당 물품과 관련된 추천 상품입니다.</h4>
      {listStatus}
    </div>
  );
}

export default Recommendation