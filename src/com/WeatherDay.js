import WeatherData from '../DB/weather.json';


export default function WeatherDay(probs){

  const d = probs.d;

  const WItem = WeatherData.response.body.items.item;
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
      <div className='box'> <span className='dN'>{d}일후</span> <span className='tit'>오전 강수량</span><span className='Num'>{d2}</span></div> 
      <div className='box'> <span className='dN'>{d}일후</span> <span className='tit'>오후 강수량</span><span className='Num'>{d3}</span></div> 
      <div className='box'> <span className='dN'>{d}일후</span> <span className='tit'>오전 날씨예보</span><span className='Num'>{d4}</span></div>
      <div className='box'><span className='dN'>{d}일후</span> <span className='tit'>오후 날씨예보</span><span className='Num'>{d5}</span></div>
    </ul>

    </>
  );

}