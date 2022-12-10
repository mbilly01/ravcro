import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Portofolios from './components/Portofolios';
import Skills from './components/Skills';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Header/>
      <Portofolios/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
