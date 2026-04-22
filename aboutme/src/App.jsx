import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Sidebar } from './Sidebar.jsx'
import { Body } from "./Body.jsx"
import { Header } from "./Header.jsx"
import './App.css'
import {showSlides} from "./SlideshowContainer.jsx"
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0)
    useEffect(() => {
    //showSlides(1, 0);
    //showSlides(1, 1);
    //showSlides(1, 2);
  }, []);
  return (
    <>
    <Header />
    <hr/>
    <div id="section">
    <Sidebar />
    <Body />
    </div>
    </>
  )
}

export default App
