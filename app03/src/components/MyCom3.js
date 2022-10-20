import MyStyle3 from "./MyStyle3.css";
import { useState } from "react";

function MyCom3(props){
  const myMv = {...props.item};
  
  // map() 함수
  // let arr = [1,2,3]
  // arr = arr.map((item) => item * 2)
  // console.log(arr)

  // const lis = Object.entries(myMv).map((item) => (
  //     <li key={item}  className='mvLi'>
  //       <span className="mvLiK">{item[0]}</span>
  //       <span className="mvLiV">{item[1]}</span>
  //     </li>
  // ))
  const keys = ['rank', 'movieNm'];
  let lis = keys.map((k) =>
        <div key={k + myMv['movieCd']} className={k}>{myMv[k]}</div>
  )  

  const keys2 = ['openDt','salesAcc','audiAcc']
  let lisDetail = keys2.map((k) =>
    <div key={k + myMv['movieCd']} className={k}>{k} : {myMv[k]}</div>
  )

  let [count, upCount] = useState(0);
  
  let [view, setView] = useState('none');

  let viewBlock = (e) => {
    e.preventDefault();
    setView(view = 'block')
  }
  let viewNone = (e) => {
    e.preventDefault();
    setView(view = 'none')
  }

  return(  
      <div className="container">
        <div>
          <div className="mvLi" onMouseEnter={viewBlock} onMouseLeave={viewNone}>
            {lis}
          </div>
          <div className="mvLiDetail" style={{'display' : view}}>
            {lisDetail}
          </div>
        </div>
        <div className="like">
          <span onClick={() => {
            upCount(count+1)
            }}>❤</span>
          <span>{count}</span>
        </div>
      </div>
    
  );
}

export default MyCom3;