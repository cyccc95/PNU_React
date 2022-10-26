import { Link, useParams } from "react-router-dom";
import {useState} from 'react';



function MovieDetail(){
  const movieCd = useParams().mvCd;
  console.log(movieCd)

  

  return(
    <>
      <Link to="/"><button className="homeButton">홈으로</button></Link>
      
    </>
  );
}

export default MovieDetail;