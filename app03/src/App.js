// import MyCom from './components/MyCom';
// import MyCom2 from './components/MyCom2';
import { useEffect, useRef, useState } from 'react';
import MyCom3 from './components/MyCom3';

function App() {
  let mv = [
    {
      "rnum": "1",
      "rank": "1",
      "rankInten": "1",
      "rankOldAndNew": "OLD",
      "movieCd": "20198317",
      "movieNm": "인생은 아름다워",
      "openDt": "2022-09-28",
      "salesAmt": "161663671",
      "salesShare": "14.6",
      "salesInten": "451167",
      "salesChange": "0.3",
      "salesAcc": "6548124611",
      "audiCnt": "17910",
      "audiInten": "261",
      "audiChange": "1.5",
      "audiAcc": "685344",
      "scrnCnt": "829",
      "showCnt": "2534"
    },
    {
      "rnum": "2",
      "rank": "2",
      "rankInten": "-1",
      "rankOldAndNew": "OLD",
      "movieCd": "20215601",
      "movieNm": "공조2: 인터내셔날",
      "openDt": "2022-09-07",
      "salesAmt": "147988846",
      "salesShare": "13.3",
      "salesInten": "-38522666",
      "salesChange": "-20.7",
      "salesAcc": "68148142496",
      "audiCnt": "17727",
      "audiInten": "-1260",
      "audiChange": "-6.6",
      "audiAcc": "6642615",
      "scrnCnt": "780",
      "showCnt": "2337"
    },
    {
      "rnum": "3",
      "rank": "3",
      "rankInten": "0",
      "rankOldAndNew": "NEW",
      "movieCd": "20227304",
      "movieNm": "오펀: 천사의 탄생",
      "openDt": "2022-10-12",
      "salesAmt": "165002458",
      "salesShare": "14.9",
      "salesInten": "165002458",
      "salesChange": "100",
      "salesAcc": "168791458",
      "audiCnt": "17106",
      "audiInten": "17106",
      "audiChange": "100",
      "audiAcc": "17527",
      "scrnCnt": "638",
      "showCnt": "1952"
    },
    {
      "rnum": "4",
      "rank": "4",
      "rankInten": "-1",
      "rankOldAndNew": "OLD",
      "movieCd": "20219628",
      "movieNm": "정직한 후보2",
      "openDt": "2022-09-28",
      "salesAmt": "85779291",
      "salesShare": "7.7",
      "salesInten": "-22012987",
      "salesChange": "-20.4",
      "salesAcc": "7299584783",
      "audiCnt": "9547",
      "audiInten": "-2313",
      "audiChange": "-19.5",
      "audiAcc": "765922",
      "scrnCnt": "647",
      "showCnt": "1611"
    },
    {
      "rnum": "5",
      "rank": "5",
      "rankInten": "0",
      "rankOldAndNew": "NEW",
      "movieCd": "20208101",
      "movieNm": "대무가",
      "openDt": "2022-10-12",
      "salesAmt": "86076134",
      "salesShare": "7.8",
      "salesInten": "86076134",
      "salesChange": "100",
      "salesAcc": "101380134",
      "audiCnt": "8952",
      "audiInten": "8952",
      "audiChange": "100",
      "audiAcc": "10648",
      "scrnCnt": "587",
      "showCnt": "1472"
    },
    {
      "rnum": "6",
      "rank": "6",
      "rankInten": "0",
      "rankOldAndNew": "OLD",
      "movieCd": "20227338",
      "movieNm": "티켓 투 파라다이스",
      "openDt": "2022-10-12",
      "salesAmt": "75024853",
      "salesShare": "6.8",
      "salesInten": "48024853",
      "salesChange": "177.9",
      "salesAcc": "105309853",
      "audiCnt": "7938",
      "audiInten": "4938",
      "audiChange": "164.6",
      "audiAcc": "11303",
      "scrnCnt": "550",
      "showCnt": "1333"
    },
    {
      "rnum": "7",
      "rank": "7",
      "rankInten": "0",
      "rankOldAndNew": "NEW",
      "movieCd": "20226798",
      "movieNm": "에브리씽 에브리웨어 올 앳 원스",
      "openDt": "2022-10-12",
      "salesAmt": "66298803",
      "salesShare": "6.0",
      "salesInten": "66298803",
      "salesChange": "100",
      "salesAcc": "84178003",
      "audiCnt": "6316",
      "audiInten": "6316",
      "audiChange": "100",
      "audiAcc": "7544",
      "scrnCnt": "562",
      "showCnt": "1338"
    },
    {
      "rnum": "8",
      "rank": "8",
      "rankInten": "-4",
      "rankOldAndNew": "OLD",
      "movieCd": "20226777",
      "movieNm": "극장판 짱구는 못말려: 수수께끼! 꽃피는 천하떡잎학교",
      "openDt": "2022-09-28",
      "salesAmt": "60977494",
      "salesShare": "5.5",
      "salesInten": "-19503857",
      "salesChange": "-24.2",
      "salesAcc": "4679659472",
      "audiCnt": "6106",
      "audiInten": "-1939",
      "audiChange": "-24.1",
      "audiAcc": "467853",
      "scrnCnt": "401",
      "showCnt": "644"
    },
    {
      "rnum": "9",
      "rank": "9",
      "rankInten": "0",
      "rankOldAndNew": "NEW",
      "movieCd": "20198461",
      "movieNm": "리멤버",
      "openDt": "2022-10-26",
      "salesAmt": "49527000",
      "salesShare": "4.5",
      "salesInten": "49527000",
      "salesChange": "100",
      "salesAcc": "49527000",
      "audiCnt": "5133",
      "audiInten": "5133",
      "audiChange": "100",
      "audiAcc": "5133",
      "scrnCnt": "23",
      "showCnt": "24"
    },
    {
      "rnum": "10",
      "rank": "10",
      "rankInten": "-1",
      "rankOldAndNew": "OLD",
      "movieCd": "20210087",
      "movieNm": "듄",
      "openDt": "2021-10-20",
      "salesAmt": "42890970",
      "salesShare": "3.9",
      "salesInten": "22980470",
      "salesChange": "115.4",
      "salesAcc": "17753258480",
      "audiCnt": "3163",
      "audiInten": "1822",
      "audiChange": "135.9",
      "audiAcc": "1608704",
      "scrnCnt": "25",
      "showCnt": "61"
    }
  ];
  // let mvs = mv.map((m) => 
  //   <MyCom3 key={m.movieCd} item={m} />
  // )
  let [mvs, setMvs] = useState([]);


  // ref 변수 선언
  const txtRef = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    
    // let temp = [];
    // for(let i = 0; i < mv.length; i++){
    //   if(mv[i].movieNm.includes(txtRef.current.value)){
    //     temp.push(<MyCom3 key={mv[i].movieCd} item={mv[i]} />)
    //   }
    // }
    // setMvs(temp);
    
    let temp = mv.filter((m) => m.movieNm.includes(txtRef.current.value))
    setMvs(temp.map((m) => <MyCom3 key={m.movieCd} item={m} />))
  }

  // useEffect
  useEffect(() => {
    txtRef.current.focus() // 랜더링 처음 됐을때 (새로고침) 커서가 input에 가게 해줌
    setMvs(mv.map((m) => <MyCom3 key={m.movieCd} item={m} />))
  }, []);
  
  
  return (
    <>
      {/* <MyCom /> */}
      {/* <MyCom2 /> */}
      <h1 className="boxTitle">박스오피스</h1>
      <form className='searchMv' onSubmit={handleClick}>
        <input name="txt1" type="text" ref={txtRef} placeholder="영화명을 입력하세요"></input>
        <button type='submit'>확인</button>
        <button type='reset'>취소</button>
      </form>
      {/* <MyCom3 item={mv} /> */}
      {mvs}
    </>
  );
}

export default App;
