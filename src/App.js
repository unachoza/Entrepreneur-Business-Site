import React from 'react';
import Button from '@material-ui/core/Button';
import Header from './Components/AppBar.component';
import Form from 'Components/Form/Form.component';
import BasicTextFields from 'Components/Form/Form.material.js';
import './App.css';

function App() {
  return (
    // <div className="App">
    <div class="effect-grain">
      <div class="background effect-blurry"></div>
      <Header />
      <Form />
      <BasicTextFields />
    </div>
    /* <Button variant="contained" color="primary">
        Click Me!!
      </Button> */
    // </div>
  );
}

export default App;
