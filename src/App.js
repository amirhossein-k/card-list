import { createContext, useEffect, useState } from "react";
import { Routes,Route } from "react-router-dom";
import './app.css'

import Home from "./pages/home/Home";




function App() {


  return (
    <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="*" element={<p>not found</p>}/>
    </Routes>
  )
}

export default App;
