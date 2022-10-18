import { useEffect, useState } from "react";
function MvTimer(){
  let [t,setT] = useState(null);
  useEffect(() => {
    let timer = setInterval(() => {
      setT(new Date().toLocaleTimeString())
    }, 1000)

    return () => {clearInterval(timer)} // 타이머 컴포넌트가 없어졌을 때 제거해줌
    
  }, [])

  return (
    <>
      {t} 
    </>
  );
}
export default MvTimer;