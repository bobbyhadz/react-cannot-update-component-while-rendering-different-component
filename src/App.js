import './App.css';

import {useEffect, useState} from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>bobbyhadz.com</h2>
      <h2>Count: {count}</h2>

      <Child count={count} setCount={setCount} />
    </div>
  );
}

function Child(props) {
  // 👇️ calling setState() directly in the body of the component
  useEffect(() => {
    if (props.count === 0) {
      props.setCount(1);
    }
  }, [props]);

  return <div>Child component</div>;
}

export default App;
