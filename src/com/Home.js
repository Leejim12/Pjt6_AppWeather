import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Home(){
  const navigate = useNavigate();
  
  const url = {
    "사과" : '/p2?item=사과&item2=과일',
    "바나나" : '/p2?item=바나나&item2=과일',
    "당근" : '/p2?item=당근&item2=채소'  
  }

  const handleClick = (k) => {
    console.log(url[k]);
    navigate(url[k]);
  }// 이거 switch case(url연동) 해서도 할 수 있음.

  return(
    <>
      <h1> 일기예보 </h1>
      <div className='btuDiv'>
          <button className='homebtu'><Link to = "/"> 홈으로 </Link></button>
          <button className='homebtu'><Link to = "/p1/h"> 중기예보 </Link></button>
          <button className='homebtu'><Link to = "/p2"> 단기예보 </Link></button>
      </div>  
       
    </>
  );
}