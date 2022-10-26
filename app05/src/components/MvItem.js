import { useState } from 'react';
import ChartStyle from './ChartStyle.css';
import {useParams} from 'react-router-dom';



function MvItem(props){
  const mvItem = {...props.item}

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
    <>
      <div className="mvItem" onMouseEnter={viewBlock} onMouseLeave={viewNone}>
        <div className='mvItemRank'>{mvItem.rank}</div>
        <div className='mvItemName'>{mvItem.movieNm}</div>
      </div>
      
      <div className='mvDetail'style={{'display' : view}}>
        <div className='mvDetailItem'>
          <div>개봉일</div> 
          <div>{mvItem.openDt}</div>
        </div>
        <div className='mvDetailItem'>
          <div>누적관객수</div>
          <div>{mvItem.audiAcc}원</div>
        </div>
        <div className='mvDetailItem'>
          <div>누적매출액</div>
          <div>{mvItem.salesAcc}명</div>
        </div>
      </div>
    </>
  );
}

export default MvItem;