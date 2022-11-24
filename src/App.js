import React, {useState} from 'react'
import './App.css';

import Cards from './components/cards'

function App() {
    const[start, setStart] = useState(false);

    const handleClick = () => {
        setStart(!start)
    }

  return (
    <div className="App">
        <div className='title'>
          <h1>Wlcome to the memory</h1>
        </div>
        <div className='game'>
            {start ? <Cards /> : <button onClick={handleClick}>Start</button>}
        </div>
    </div>
  );
}

export default App;
