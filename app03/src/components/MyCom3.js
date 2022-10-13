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

  let [count, upCount] = useState(0);
  
  return(
    <div className="container">
      <div className="mvLi">
        {lis}
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