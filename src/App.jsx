import { useState, useEffect } from 'react'
import './style.css'

import React from 'react'
import Navbar from './components/Navbar'
function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(null);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch('http://localhost/Dressmeapp/api.php');
              const result = await response.json();
              setData(result);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };

      fetchData();
  }, []);
  return (
    <>
    <Navbar/>
    <div>
            <h1>React and XAMPP Connection</h1>
            {data ? (
                <div>
                    <p>{data.message}</p>
                    <p>Status: {data.status}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    </>
  )
}

export default App
