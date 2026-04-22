import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Sidebar } from './Sidebar.jsx'
import { Body } from "./Body.jsx"
import { Header } from "./Header.jsx"
import './App.css'
import { useEffect } from "react";

function App() {

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
