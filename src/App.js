import React from 'react';
import Button from '@material-ui/core/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="effect-grain">
        <div class="background effect-blurry"></div>
      </div>
      <Button variant="contained" color="primary">
        Click Me!!
      </Button>
    </div>
  );
}

export default App;
