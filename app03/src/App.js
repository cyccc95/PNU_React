import './App.css';

function App() {
  const name = 'PNU';

  return (
    <div className="div1">
      {/* <h1>Hello {name ? name : '아무개님'}</h1> */}
      <h1>Hello {name || '아무개님'}</h1>
      <h2>React!!</h2>
    </div>
  );
}

export default App;
