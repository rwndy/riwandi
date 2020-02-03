import React from 'react';
import Home from './components/Home/index';
import Footer from './components/Footer/Footer';
import ReactGA from 'react-ga';

const analytic = () => {
  const trackingID = 'UA-64780720-1';
  ReactGA.initialize(trackingID);
  ReactGA.pageview('/')

}


const App = ()=> {
  analytic()
  return (
    <div className="App">
      <Home />
      <Footer />
    </div>
  );
}

export default App;
