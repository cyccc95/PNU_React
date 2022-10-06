import '../App.css';

function Navbar() {
  return (
    <nav>
      <div className="nav-logo">Mylogo</div>
      <ul className="nav-menu">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
      <div className="nav-icon"><i className="fa-brands fa-github"></i></div>
    </nav>
  );
}

export default Navbar;