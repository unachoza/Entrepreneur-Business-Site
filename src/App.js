import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import theme from './Components/UI/Theme.styles.js';
import Header from './Components/UI/Header.component';
import Footer from './Components/UI/Footer';
import ThisLottie from './Components/UI/Lottie';
import Services from './Components/Services';
import CustomSoftware from './Components/CustomSoftware';
import MobileApps from './Components/MobileApps';
import Websites from './Components/Websites';
import Revolution from './Components/Revolution';
import About from './Components/About';
import Contact from './Components/Contact';
import Estimate from './Components/Estimate';
import './App.css';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <ThisLottie {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />}
          />
          <Route
            exact
            path="/about"
            render={(props) => <About {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />}
          />
          <Route
            exact
            path="/revolution"
            render={(props) => <Revolution {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />}
          />
          <Route
            exact
            path="/services"
            render={(props) => <Services {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />}
          />
          <Route
            exact
            path="/customsoftware"
            render={(props) => <CustomSoftware {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />}
          />
          <Route
            exact
            path="/mobileapps"
            render={(props) => <MobileApps {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />}
          />
          <Route
            exact
            path="/websites"
            render={(props) => <Websites {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />}
          />
          <Route
            exact
            path="/contact"
            render={(props) => <Contact {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />}
          />
          <Route
            exact
            path="/estimate"
            render={(props) => <Estimate {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />}
          />
          <Route
            exact
            path="/contact"
            component={() => <div>Contact, only if you have something really important to say</div>}
          />
        </Switch>
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
