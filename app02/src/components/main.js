import '../App.css';
import MainSection from './mainSection';

function Main() {
  return (
    <main>
      <MainSection title="HTML" />
      <MainSection title="CSS" />
      <MainSection title="JavaScript" />
      <MainSection title="React" />
    </main>
  );
}

export default Main;