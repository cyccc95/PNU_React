import { useState } from 'react';
import mv from '../jsonData/mvInfo.json';
import MvInfoStyle from './MvInfoStyle.css';
import reactImg from '../images/react.png';

function MvInfo(){
  const mvInfo = mv.movieInfoResult.movieInfo;
  console.log(mvInfo)
  const key1 = ['movieCd', 'openDt', 'prdtStatNm', 'showTm',] 
  const key2 = ['audits', 'nations', 'directors', 'genres', 'companys']  
  
  const koKey = {
    'movieCd' : '영화코드',
    'openDt' : '개봉일',
    'prdtStatNm' : '제작상태',
    'showTm' : '상영시간',
    'audits' : '관람등급',
    'nations' : '제작국가',
    'directors' : '감독',
    'genres' : '장르',
    'companys' : '배급사',
  }

  let myInfo = {};
  
  for(let k of key1){
    myInfo[koKey[k]] = mvInfo[k]
  }

  for(let k of key2){
    switch(k) {
      case 'audits' :
        myInfo[koKey[k]] = mvInfo[k].map((item) => item.watchGradeNm);
        break;
      case 'nations' :
        myInfo[koKey[k]] = mvInfo[k].map((item) => item.nationNm);
        break;
      case 'directors' :
        myInfo[koKey[k]] = mvInfo[k].map((item) => item.peopleNm);
        break;
      case 'genres' :
        myInfo[koKey[k]] = mvInfo[k].map((item) => item.genreNm);
        break;
      case 'companys' :
        myInfo[koKey[k]] = mvInfo[k].filter((item) => item.companyPartNm === '배급사')
        myInfo[koKey[k]] = myInfo[koKey[k]].map((item) => item.companyNm);
        break;
      }
  }
  console.log(myInfo)
  let list = []
  for(let [k,v] of Object.entries(myInfo)){
    list.push(
      <div className='list' key={k + myInfo.movieNm}>
        <div className='key'>{k}</div>
        <div className='content'>{v}</div>
      </div>
    ) 
  }

  let [count1, upCount1] = useState(0);
  let [count2, downCount2] = useState(0);
  return (
    <>
      <div className='container'>
        <div className='leftContainer'>
          <img src={reactImg} />
        </div>
        <div className='rightContainer'>
          <div>
            <h1>{mvInfo.movieNm}</h1>
          </div>
          {list}
        </div>
      </div>
      {/* <div className='like'>
        <div onClick={() => {upCount1(count1+1)}}>👍{count1}</div>
        <div onClick={() => {downCount2(count2-1)}}>👎{-count2}</div> 
        </div> */}
    </>
  );
}

export default MvInfo;