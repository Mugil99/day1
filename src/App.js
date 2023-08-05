import logo from './logo.svg';
import './App.css';
import CurrentTime from './Components/CurrentTime';
import CurrentTime2 from './Components/CurrentTime2';
import ButtonDisable from './Components/ButtonDisable';
import ButtonDisable2 from './Components/ButtonDisable2';
function App() {
  return (
    <div className="App">
      <CurrentTime/>
      <CurrentTime2/>
      <ButtonDisable/>
      <ButtonDisable2/>
    </div>
  );
}

export default App;
