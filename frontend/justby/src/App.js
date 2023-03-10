import React from 'react'

import Navbar from "./Components/Navbar";
import "./App.css";
import MainRoutes from "./Pages/MainRoutes";
import Footer from "./Components/Footer";

const App = () => {
  
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  )
}

export default App
