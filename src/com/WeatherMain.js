import {Link} from 'react-router-dom';
import WeatherDay from "./WeatherDay";
import'./Weather.css';
import {useState} from 'react';

function WeatherMain(){
  let [day,setDay] = useState(3);
  
  const handleClick = (d) => {
    setDay(d);
    console.log(d);
  }
  return(
    <>
      <h1 className="Title">날씨예보-중기예보</h1>
      <button className='hbtu'><Link to = "/"> Home </Link></button>
      <div className="buttonBox">
      <form className="btf">
        <button className="btn" onClick={(e) => {e.preventDefault();handleClick(3);}}>3일후 날씨</button>
        <button className="btn" onClick={(e) => {e.preventDefault();handleClick(4);}}>4일후 날씨</button>
        <button className="btn" onClick={(e) => {e.preventDefault();handleClick(5);}}> 5일후 날씨</button>
        <button className="btn" onClick={(e) => {e.preventDefault();handleClick(6);}}>6일후 날씨</button>
      </form>
      </div>
      <WeatherDay d={day}/> 
      {/* d를 받아낼 수 있게 해줌 */}
    </>
  );
}

export default WeatherMain;