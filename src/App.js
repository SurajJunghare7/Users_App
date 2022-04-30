import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home'
import  {BrowserRouter, Route, Routes} from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/contact' component={Contact}/>

      </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;
