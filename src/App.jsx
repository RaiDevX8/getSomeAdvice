// App.js
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './index.css'; 

const App = () => {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(-2);

  useEffect(() => {
    getAdvice();
  }, []);

  async function getAdvice() {
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      setAdvice(data.slip.advice);
      setCount(count => count + 1);
    } catch (error) {
      console.error("Error fetching advice:", error);
      setAdvice("Failed to fetch advice. Please try again later.");
    }
  }

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-logo">Advice App</div>
        
      </nav>
      <div className="container">
        <div className="content">
          <Typography variant="h4" gutterBottom className="advice">
            {advice}
          </Typography>
          <Button 
            variant="contained" 
            onClick={getAdvice}  
            className="button"
            sx={{ '&:hover': { backgroundColor: '#FF5722' } }} 
          >
            Generate
          </Button>
          <span className="count">You have read {count} Advices</span>
        </div>
      </div>
    </div>
  );
}

export default App;
