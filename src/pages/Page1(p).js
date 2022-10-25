import { useParams } from "react-router-dom";
// useParams : 파라미터 가져오는 애 ( 라우터 설치해야 사용 가능 )

export default function Page1(){
  const pm = useParams().item;
  
  
  
  return(
    <>
      <h1> Page1 </h1>
      <h2>{pm === 'h'?'Page1 입니다!':pm}</h2>
    </>
  );
}