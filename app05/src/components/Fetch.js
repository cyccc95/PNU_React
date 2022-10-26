import { useEffect, useState, useRef } from "react"

function Fetch(){
  const [mv, setMv] = useState([]);
  const mvLoad = (d) => {
    const url = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=" + d;

    fetch(url)
      .then((resp) => resp.json()) // 성공했을 때 가져오는 Response 객체를 json 형태로 
      .then((data) => {
        console.log('data : ', data)
        setMv(data.boxOfficeResult.dailyBoxOfficeList.map((m) => m.movieNm))
      })
      .catch((err) => {console.log(err)})

  }

  useEffect(() => {
    let today = new Date()
    let yesterday = new Date(today)
    yesterday.setDate(today.getDate() - 1)
    let year = yesterday.getFullYear()
    let month = yesterday.getMonth() + 1;
    let day = yesterday.getDate();
    console.log(year, month, day)
    // mvLoad('20221025')
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
      <h1>비동기 통신 연습 - fetch API</h1>
      <form>
        <input type='date' ref={dRef} name='d' onChange={handleChange}/>
      </form>
      {mv}
    </>

  );
}

export default Fetch;