import { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [backendData, setBackendData] = useState([{}]); // why an array?

  useEffect(() => {
    console.log('effect fired');
    setTimeout(() => {
      // Not necessary I Just wanted to see the Loading screen
      fetch('http://localhost:9000/testAPI')
        .then((res) => res.json())
        .then((res) => setBackendData(res));
    }, 2000);
  }, []);

  const users = backendData.users ? (
    backendData.users.map((user, id) => <p key={id}>{user}</p>)
  ) : (
    <p>Loading...</p>
  );

  return <>{users}</>;
}

export default App;
