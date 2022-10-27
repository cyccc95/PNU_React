import { Link, useParams } from "react-router-dom";
import {useState} from 'react';



function MovieDetail(props){
  const movieCd = useParams().mvCd;
  console.log(movieCd)
  console.log(props.rank)

  

  return(
    <>
      <Link to="/"><button className="homeButton">홈으로</button></Link>
      
    </>
  );
}

export default MovieDetail;