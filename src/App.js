import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles.css';
import Container from "./components/Container";
import Privacy from "./components/Privacy";
import About from "./components/About";


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Container/>}></Route>
      <Route path="/privacy" element={<Privacy/>}></Route> 
      <Route path="/about" element={<About/>}></Route>
    </Routes>
    
    </BrowserRouter>
    </>
  );
};

export default App;
