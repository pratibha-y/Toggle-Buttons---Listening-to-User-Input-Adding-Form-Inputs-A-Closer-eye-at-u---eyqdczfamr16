
import React, {useState} from 'react'
import '../styles/App.css';
const App = () => {
//code here 
let [off, setOff] = useState(true);
  const handleClick = ()=>{
    setOff(!off);
  }
    
  return (
    <div className="App">
      <button id="btn1" onClick={handleClick}>
      {/* assign value for button 1 */}
        {off ? "OFF" : "ON"}
      </button>
      <br />
      <br />
      <button id="btn2" onClick={handleClick}>
        {/* assign value for button 2 */}
        {off ? "ON" : "OFF"}
      </button>
    </div>
  );
}


export default App;
