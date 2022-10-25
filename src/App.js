
import './App.css';
import WeatherMain from './com/WeatherMain';
import WeatherMain2 from './com/WeatherMain2';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Nav from './com/Nav';
import Home from './com/Home';

// import Home from './pages/Home'
// import Page1 from './pages/Page1'
// import Page2 from './pages/Page2'
// import Nav from './pages/Nav';


function App() {
  return (
    <BrowserRouter>
      <div className='World'>
      {/* Nav : 공통적으로 쓰는 부분 */}


      {/* 라우팅 등록정보 */}
      <Routes> 
        <Route path = "/" element = {<Home />} />
        <Route path = "/p1/:item" element = {<WeatherMain />} />
        <Route path = "/p2" element = {<WeatherMain2 />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
