import React from 'react';
import { ThemeProvider, mStyles } from '@material-ui/core/styles';
import theme from 'UI/Theme.styles.js';
import Button from '@material-ui/core/Button';
import Header from 'Components/AppBar.component';
import Form from 'Components/Form/Form.component';
import BasicTextFields from 'Components/Form/Form.material.js';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Form />
      <BasicTextFields />
    </ThemeProvider>
  );
}

export default App;
