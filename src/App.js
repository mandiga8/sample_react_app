//import logo from './logo.svg';
import './App.css';
import Header1 from './components/Header1';
import Body1
 from './components/Body1';
function App() {
  return (
    <div className="App">
      <div>
        <div><Header1></Header1></div>
        <div><Body1 mycontent="Inside the body 1...."></Body1></div>
        <div><Body1 mycontent="Inside the body 2...."></Body1></div>
        <div><Body1 mycontent="Inside the body 3...."></Body1></div>
      </div>
    </div>
  );
}

export default App;
