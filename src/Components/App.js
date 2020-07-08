import React, { useState, Component } from 'react';
import { ThemeProvider, myStyles } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import theme from 'Components/UI/Theme.styles';
import Header from 'Components/UI/Header';
import Form from 'Components/Form/Form.component';
import BasicTextFields from 'Components/Form/Form.material.js';
import Footer from 'Components/UI/Footer';
import LandingPage from 'Components/LandingPage';
import Services from 'Components/Services';
import CustomSoftware from 'Components/CustomSoftware';
import MobileApps from 'Components/MobileApp';
import Websites from 'Components/Websites';
import Revolution from 'Components/Revolution';
import About from 'Components/About';
import Contact from 'Components/Contact';
import Estimate from 'Components/Estimate';

// const [selectedIndex, setSelectedIndex] = useState(0);
// const [value, setValue] = useState(0);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <div>HOME but not home also</div>} />
          <Route exact path="/services" component={() => <div>Services that rule</div>} />
          <Route exact path="/accounting" component={() => <div>Accounting</div>} />
          <Route exact path="/about" component={() => <div>About me, first off, i exist</div>} />
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
