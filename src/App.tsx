import React from 'react';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0)

  const clickMe = () => { setCount( count + 1) }

  return (
    <div data-test='component-app'>
        <h1 data-test='counter-display'>{count}</h1>
        <button onClick={clickMe} data-test='increment-button'>Increment</button>
    </div>
  );
}

export default App;
