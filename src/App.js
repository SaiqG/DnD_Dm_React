
import './App.css';
import Nav from './components/navigation/Nav'
import BaseAppBody from './components/base_body/Intro';
import Monsters from './components/monsters_search/Monsters';

function App() {
  return (
    <div className="App">
      <Nav />
      <BaseAppBody />
      <Monsters />
    </div>
  );
}

export default App;
