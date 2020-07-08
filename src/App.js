import React from 'react';
import { ThemeProvider, mStyles } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import theme from 'UI/Theme.styles.js';
import Button from '@material-ui/core/Button';
import Header from 'Components/AppBar.component';
import Form from 'Components/Form/Form.component';
import BasicTextFields from 'Components/Form/Form.material.js';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/" component={() => <div>Home</div>} />
          <Route exact path="/services" component={() => <div>Services</div>} />
          <Route exact path="/accounting" component={() => <div>Accounting</div>} />
          <Route exact path="/about" component={() => <div>About</div>} />
          <Route exact path="/contact" component={() => <div>Contact</div>} />
          <Route exact path="/Show all" component={() => <div>Show all notification content</div>} />
          <Route exact path="/hidesensitive" component={() => <div>Hide sensitive notification content</div>} />
          <Route exact path="/hideall" component={() => <div>Hide all notification content</div>} />
          <Form />
          <BasicTextFields />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
