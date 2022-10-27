import { useEffect, useState, useRef } from "react";
import ChartStyle from "./ChartStyle.css";
import MvItem from "./MvItem";
import {Link} from 'react-router-dom';

function MovieChart(){
  

  let [mv, setMv] = useState([]);
  const mvLoad = (d) => {
    const url = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=" + d;
    
    fetch(url)
      .then((resp) => resp.json()) // 성공했을 때 가져오는 Response 객체를 json 형태로 
      .then((data) => {
        console.log('data : ', data)
        mv = data.boxOfficeResult.dailyBoxOfficeList;
        console.log(data)
        setMv(mv.map((m) => 
          <MvItem key={m.movieCd} item={m} />))
      })
      .catch((err) => {console.log(err)})
  }  

  useEffect(() => {
    let today = new Date()
    let yesterday = new Date(today)
    yesterday.setDate(today.getDate() - 1)
    let year = String(yesterday.getFullYear())
    let month = String(yesterday.getMonth() + 1);
    let day = String(yesterday.getDate());
    
    let dd = year + month  + day
    mvLoad(dd)
  },[])

  const dRef = useRef()
  
  const handleChange = (e) => {
    e.preventDefault();
    let dd = dRef.current.value.replaceAll('-','')
    mvLoad(dd)
    console.log(dd)
  }


  return(  
    <>
      <form className="selectDate">
        <input type='date' ref={dRef} name='d' onChange={handleChange}/>
      </form>
      <div className="list">
        {mv}
      </div>
    </>
    
  );
}

export default MovieChart;