import React, { useState } from 'react';
import { ThemeProvider, mStyles } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import theme from 'Components/UI/Theme.styles.js';
import Button from '@material-ui/core/Button';
import Header from 'Components/UI/Header.component';
import Footer from 'Components/UI/Footer';
import LandingPage from 'Components/LandingPage';
import ThisLottie from 'Components/UI/Lottie';
import Services from 'Components/Services';
import CustomSoftware from 'Components/CustomSoftware';
import MobileApps from 'Components/MobileApps';
import Websites from 'Components/Websites';
import Revolution from 'Components/Revolution';
import About from 'Components/About';
import Contact from 'Components/Contact';
import Estimate from 'Components/Estimate';
import Form from 'Components/Form/Form.component';
import BasicTextFields from 'Components/Form/Form.material.js';
import 'App.css';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <Switch>
          <Route exact path="/" component={ThisLottie} />
          {/* <Route path="/" component={LandingPage} /> */}
          <Route exact path="/services" component={() => <div>Services</div>} />
          <Route
            exact
            path="/contact"
            component={() => <div>Contact, only if you have something really important to say</div>}
          />
          {/* <Route exact path="/services" component={() => <div>Services</div>} />
          <Route exact path="/accounting" component={() => <div>Accounting</div>} />
          <Route exact path="/about" component={() => <div>About</div>} />
          <Route exact path="/garden" component={() => <div>Garden</div>} />
         
          <Route exact path="/Show all" component={() => <div>Show all notification content</div>} />
          <Route exact path="/hidesensitive" component={() => <div>Hide sensitive notification content</div>} />
          <Route exact path="/hideall" component={() => <div>Hide all notification content</div>} />
          <Route exact path="/form" component={Form} />
          <Form exact path="/form" component={Form} />
          <BasicTextFields /> */}
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
