import WeatherData from '../DB/weather.json';


export default function WeatherDay(probs){
  const d = probs.d;

  const WItem = WeatherData.response.body.items.item;
  // 1개짜리 배열이라, 0인덱스 준거임 
  const items = [];
  const keys = [`rnst${d}am`,`rnst${d}pm`,`wf${d}am`,`wf${d}pm`];

  for(let k of keys){
    items.push(WItem[k]);
    console.log(items);
  }
  let d2 = items[0];
  let d3 = items[1];
  let d4 = items[2];
  let d5 = items[3];

  return(
    <>
  <h2>{}</h2>
    <ul>
      <li className='cc'><p><span className='dN'><i><b>{d}</b></i>일후</span></p> <p><span className='tit'>오전 강수량</span></p><p><span className='Num'><b>{d2}%</b></span></p></li> 
      <li className='cc'><p><span className='dN'><i><b>{d}</b></i>일후</span></p> <p><span className='tit'>오후 강수량</span></p><p><span className='Num'><b>{d3}%</b></span></p></li>
      <li className='cc'><p><span className='dN'><i><b>{d}</b></i>일후</span></p><p> <span className='tit'>오전 날씨예보</span></p><p><span className='Num'><b>{d4}</b></span></p></li>
      <li className='cc'><p><span className='dN'><i><b>{d}</b></i>일후</span></p><p><span className='tit'>오후 날씨예보</span></p><p><span className='Num'><b>{d5}</b></span></p></li>
    </ul>

    </>
  );

}