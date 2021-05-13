
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
     <h1>SIMPLE COUNTER WITH STATE-HOOK</h1>
     <button type="primary" onClick={() => setCount(count + 1)}>+</button>
     <button type="primary" onClick={() => setCount(count - 1)}>-</button>
     <h2>{count}</h2>
    </div>
  );
  }
export default App;
