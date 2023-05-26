import logo from './logo.svg';
import './App.css';

function App() {
  async function handleClick(i, j) {
    const data = {
      key:i,
      sec:j
    }
    await fetch("http://localhost:4000/", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data), 
    })
  }


  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: "100%", height: 200, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <button onClick={() => handleClick('* * * * * *', 1)} className='appButton'>1 second</button>
          <button onClick={() => handleClick('*/2 * * * * *', 2)} className='appButton'>2 second</button>
          <button onClick={() => handleClick('*/10 * * * * *', 10)} className='appButton'>10 second</button>
          <button onClick={() => handleClick('*/15 * * * * *', 15)} className='appButton'>15 second</button>
        </div>
      </header>
    </div>
  );
}

export default App;
