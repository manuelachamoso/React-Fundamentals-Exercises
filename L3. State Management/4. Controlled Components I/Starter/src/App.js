import logo from "./logo.svg";
import "./App.css";
import {useState} from 'react'

const App = () => {
  const [echo, setEcho] = useState('')

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="container">
        <input type="text" placeholder="Say Something" onChange={e => setEcho(e.target.value)} />
        <p className="echo">Echo: {echo}</p>
      </div>
    </div>
  );
};

export default App;
