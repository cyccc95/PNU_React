import './MyStyle.css';

function MyTime(){
  return (
    <div className="MyTime">
      {new Date().toLocaleTimeString()}
    </div>
  );
}

export default MyTime;