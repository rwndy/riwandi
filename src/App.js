import React, { useState, Fragment } from 'react';
import Footer from './components/Footer/Footer';
import ReactGA from 'react-ga';
import { PageConstruction } from './pages'

const analytic = () => {
  const trackingID = 'UA-64780720-1';
  ReactGA.initialize(trackingID);
  ReactGA.pageview('/')

}


const App = ()=> {
  const [hide, setHide] = useState(false)

  if(!hide) {
    setHide(true)
  }

  analytic()
  return (
    <Fragment>
      {hide ? (<PageConstruction />) : <Footer />}
    </Fragment>
  );
}

export default App;
