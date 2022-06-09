import './App.css';
import {useState} from 'react'

function App() {
  const [count,setCount] = useState([])
const addCount=()=>{
  setCount(count+'Mohammed Zahal' )
}

const subCount=()=>{
  setCount("")
}

  return (
    <div className="App" style={{color:"black", backgroundColor:"white"}}>
  <h1> MY NAME IS:{count}</h1>
    <button onClick={addCount} className='btn btn-primary'>CLICK</button> 
<>
    <button onClick={subCount} className='btn btn-danger'>CLEAR</button> 
  </>
    </div>
  );
}

export default App;
