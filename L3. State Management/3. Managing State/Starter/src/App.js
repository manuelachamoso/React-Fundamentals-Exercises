import corgi from "./corgi.jpg";
import "./App.css";
import {useState} from 'react'

const App = () => {
  const [like, setLike] = useState(0)

  const increase = () => {
    setLike(like + 1)
  }
  return (
    <div className="container">
      <h2>Like this photo!</h2>
      <img src={corgi} alt="Corgi"></img>
      <button style={{background: 'red', color: 'white', cursor:'pointer'}} onClick={increase}>Like</button>
      <p>Amount of likes: {like}</p>
    </div>
  );
};

export default App;
