import WeatherDay from "./WeatherDay";
import { useState } from "react";

function WeatherMain(){
  
  let [day, setDay] = useState(3);

  const selectDay = (e) => {
    setDay(day = e);
  }

  
  return(
    <div>
      <div>날씨 예보</div>
      <form>
        <button type="submit" onClick={(e) => {e.preventDefault(); selectDay(3);}}>3일 후 날씨</button>
        <button type="submit" onClick={(e) => {e.preventDefault(); selectDay(4);}}>4일 후 날씨</button>
        <button type="submit" onClick={(e) => {e.preventDefault(); selectDay(5);}}>5일 후 날씨</button>
        <button type="submit" onClick={(e) => {e.preventDefault(); selectDay(6);}}>6일 후 날씨</button>
        
      </form>
      <WeatherDay day={day} />
    </div>
  );
}

export default WeatherMain;