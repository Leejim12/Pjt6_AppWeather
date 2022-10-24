import weather2 from'../DB/weather2.json';
import item from '../DB/item.json'

export default function WeatherMain2(){

  const WItem = weather2.response.body.items.item;
  const pty = { "0": "없음", "1": "비", "2": "비/눈", "3": "눈", "4": "소나기", "5": "빗방울", "6": "빗방울눈날림", "7": "눈날림" };
  const sky = { "1": "맑음", "3": "구름많음", "4": "흐림" };


  const keys = Object.keys(WItem);
  console.log(keys);
  // {"category":"PTY","category":"REH",RN1,T1H,UUU,VEC,VVV,WSD};
  

  // let lispra = [];
  // for(let w of WItem){

  //   switch(w){
  //     case "POP" :
  //       lis.push(<li key = {w.category}>item[w.category][0] : {w.obsrValue} item[w.category][1]</li>);
  //       break;
  //     case "PTY" :
  //       lis.push(<li key = {w.category}>"강수형태" : {w.obsrValue}%</li>);
  //       break;
  //     case "PCP" :
  //       lis.push(<li key = {w.category}>"1시간 강수량" : {w.obsrValue}%</li>);
  //       break;
  //     case "REH" :
  //       lis.push(<li key = {w.category}>"습도" : {w.obsrValue}%</li>);
  //       break;
  //     case "RN1" :
  //       lis.push(<li key = {w.category}>"1시간 강수량" : {w.obsrValue}%</li>);
  //       break; 
  //     case "SNO" :
  //       lis.push(<li key = {w.category}>"강수확률" : {w.obsrValue}%</li>);
  //       break; 
  //     case "SKY" :
  //       lis.push(<li key = {w.category}>"강수확률" : {w.obsrValue}%</li>);
  //       break; 
  //     case "T1H" :
  //       lis.push(<li key = {w.category}>"강수확률" : {w.obsrValue}%</li>);
  //       break;            
        
  //   }
  //   if (w.category === 'PTY'){

  //   }
  //   else if(w.category ==='SKY'){

  //   }
  //   else {
  //     lis.push(<li key = {w.category}>{w.category} : {w.obsrValue}</li>);
  //   }
  // }


  const lis = Object.entries(WItem).map((m)=>
    (m[1].category === 'PTY' ? 
        (<li key = {m[1].category}>
            <span className='factor'>{item[m[1].category][0]}</span>
            <span className='data'>{pty[m[1].obsrValue]}</span>
        </li>)
    :(m[1].category === 'SKY' ? 
        (<li key = {m[1].category}>
            <span className='factor'>{item[m[1].category][0]}</span>
            <span className='data'>{m[1].obsrValue}{sky[m[1].category][1]}</span>
        </li>)
    :
      (<li key = {m[1].category}>
            <span className='factor'>{item[m[1].category][0]}</span>
            <span className='data'>{m[1].obsrValue}{item[m[1].category][1]}</span>
       </li>)))
  );
  
  const items = [];

  for(let k of keys){
    items.push(WItem[k]);
    console.log(items);
  }


 
 
  return(
    <>
      <h1 className="Title">날씨예보-단기정보</h1>
      <button className="homebtu"> 홈으로 </button>
      {/* <li><span className='k'>강수형태</span><span className='v'>{items[0].obsrValue}</span></li> 
      <li><span>습도</span><span>{items[1].obsrValue}%</span></li> 
      <li><span>1시간 강수량</span><span>{items[2].obsrValue}mm</span></li> 
      <li><span>기온</span><span>{items[3].obsrValue}℃</span></li> 
      <li><span>풍속(동서성분)</span><span>{items[4].obsrValue}m/s</span></li> 
      <li><span>풍향</span><span>{items[5].obsrValue}deg</span></li> 
      <li><span>풍속(남북성분)</span><span>{items[6].obsrValue}m/s</span></li> 
      <li><span>풍속</span><span>{items[7].obsrValue}m/s</span></li>  */}
      {lis}

    </>
  );
}
