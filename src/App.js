import './App.css';
import Counter from './Components/Counter';
import Purefun from './Components/Purefun';

function App() {
  return (
    <div className="App">
     <h1>HOC FUNCTION</h1>
      <Counter/>

      <h1>PURE FUNCTION</h1>
      <Purefun/>
      
    </div>
  );
}

export default App;
