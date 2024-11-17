"use client"
import { useState, useEffect} from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/api/hello')
            .then((response) => response.json())
            .then((data) => setMessage(data.message));
    }, []);
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Frontend with Next.js</h1>
      <p>{message}</p>
    </div>
  );
}
