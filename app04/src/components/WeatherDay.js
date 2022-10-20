import weather from '../jsonData/weather.json';


function WeatherDay(props){
  const weatherData = weather.response.body.items.item[0];
  
  let keys = [`rnSt${props.day}Am`,`rnSt${props.day}Pm`,`wf${props.day}Am`,`wf${props.day}Pm`]

  // let items = [];
  // for(let k of keys){
  //   items.push(weatherData[k])
  // }
  // console.log(items)
  return(
    <ul>
      <li>{props.day}일 후 오전 강수량 : {weatherData[keys[0]]}</li>
      <li>{props.day}일 후 오후 강수량 : {weatherData[keys[1]]}</li>
      <li>{props.day}일 후 오전 날씨예보 : {weatherData[keys[2]]}</li>
      <li>{props.day}일 후 오후 날씨예보 : {weatherData[keys[3]]}</li>
    </ul>
  );
}

export default WeatherDay;