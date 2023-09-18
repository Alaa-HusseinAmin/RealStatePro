import React, { Fragment } from 'react';
import './App.css';
import Accordion from './Component/Accordion';
import Agents from './Component/Agents';
import Counter from './Component/Counter';
import Footer from './Component/Footer';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Property from './Component/Property';
import Services from './Component/Services';
import Work from './Component/Work';
function App() {
  return (
   <Fragment>
    <Navbar/>
    <Home/>
    <Property/>
    <Services/>
    <Work/>
    <Accordion/>
    <Counter/>
    <Agents/>
    <Footer/>
   </Fragment>
  );
}

export default App;
