import { useLocation } from "react-router-dom";
import qs from 'query-string';

export default function Page2(){
  const location = useLocation().search;
  console.log(location);
  const query = qs.parse(location);

  
  // 파싱, const q - qs.parse 얘 한줄이 아래꺼를 다 함.
  // let loc2 = location.replace('?','').split('&')
  // loc2 = loc2.map((m) => m.split('=')[1])
  // console.log(loc2);
  // 0 : 바나나 1 : 과일
  

  return(
    <>
      <h1> Page2 </h1>
      { Object.keys(query).length === 0 ? <h2>전달자료없음</h2> : <h2>{query.item} ({query.item2})</h2>}
      {/* 키가 하나도 없으면! */}
      {/* {Object.keys(query).length === 0?<p>선택값x</p> : <h2>{query.item}({query.items})</h2>} */}
    </>
  );
}