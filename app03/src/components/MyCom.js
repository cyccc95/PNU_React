import MyStyle from "./MyStyle.css";

function MyCom() {
  const styleObj = {
    color : 'white',
    backgroundColor : 'green',
    padding : '5px',
    textAlign : 'center',
  }
  return (
    <>
      <h1 style={{
        textAlign: 'center'
      }}>
        스타일 변경예제
        </h1>
      <p style={{
        color : 'white',
        backgroundColor : 'black',
        padding : '5px',
        textAlign : 'center'
      }}>
        리액트에서 스타일 변경 - 인라인 형식으로
      </p>
      <p style={styleObj}>
        리액트에서 스타일 변경 - 인라인 형식으로 변수 사용
      </p>
      <p>
        리액트에서 스타일 변경 - css 파일에서 변경
      </p>
    </>
  );
}

export default MyCom;
