import {Link} from 'react-router-dom';

export default function Nav(){
  return(
    <nav>
      <ul className='spcul'>  
        <li className='nl'><Link to = "/"> 홈으로 </Link></li>
        <li className='nl'><Link to = "/p1/h"> 중기예보 </Link></li>
        <li className='nl'><Link to = "/p2"> 단기예보 </Link></li>
      </ul>
    </nav>
  );
}