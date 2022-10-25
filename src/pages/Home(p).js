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
      <h1> Home </h1>

      <h2> [Page1 이동]</h2>  
      <ul>
        <li><Link to = '/p1/사과'> 사과 </Link></li>
        <li><Link to = '/p1/바나나'> 바나나 </Link></li>
        <li><Link to = '/p1/당근'> 당근 </Link></li>
      </ul>

      
      <h2> [Page2 이동]</h2>
        
        <li><Link to = '/p2?item=사과&item2=과일'> 사과 </Link></li>
        <li><Link to = '/p2?item=바나나&item2=과일'> 바나나 </Link></li>
        <li><Link to = '/p2?item=당근&item2=채소'> 당근 </Link></li>

        <h2> [Page2 이동]</h2>
        <button onClick={() => handleClick('사과')}>사과</button>
        <button onClick={() => handleClick('바나나')}>바나나</button>
        <button onClick={() => handleClick('당근')}>당근</button>


    
    </>
  );
}