import MyStyle2 from './MyStyle2.css';

function MyCom2(){
  // object 생성
  let obj = new Object();

  // object 생성2
  let obj2 = {};

  // object 생성3
  let mv = {
    'rnum'	:	1,
    'rank'	:	1,
    'rankInten'	:	0,
    'rankOldAndNew':	'OLD',
    'movieCd' :	20215601,
    'movieNm'	:	'공조2: 인터내셔날',
    'openDt'	:	'2022-09-07',
    'salesAmt' : 186527512,
    'salesShare'	:	23.2,
    'salesInten'	:	-645733705,
    'salesChange'	:	-77.6,
    'salesAcc'	:	68000199650,
    'audiCnt'	:	18989,
    'audiInten'	:	-61139,
    'audiChange'	:	-76.3,
    'audiAcc'	:	6624892,
    'scrnCnt'	:	979,
    'showCnt'	:	3048
  }
  console.log(mv)
  console.log('영화명 : ',mv.movieNm)

  // object 순회
  for(let k in mv){
    console.log(k,' => ',mv[k])
    if(k === 'movieNm') break;
  }

  // object 순회2
  console.log('--------')
  for(let [k,v] of Object.entries(mv)){
    console.log(k,' => ',v)
    if(k === 'movieNm') break;
  }

  console.log('--------')
  // 얕은 복사, 깊은 복사(전개 연산자)
  obj = mv;
  obj2 = {...mv};
  mv.movieNm = '공조2';
  console.log(obj)
  console.log(obj2)
  
  console.log('--------')
  // jsx에 들어갈 내용 생성
  let list = [];
  for(let [k,v] of Object.entries(mv)){
    list.push(
      <li key={k}>
        <span className='mvLiK'>{k} : </span>
        <span className='mvLiV'>{v}</span>
      </li>) // key 값 넣어야 에러 x
  }
  console.log(list)

  return (
    <>
      <h1>Object 타입 연습</h1>
      <h1>{obj2.movieNm}</h1>
      <h4>{list}</h4>
    </>
  );
}

export default MyCom2;