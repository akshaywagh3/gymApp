import { Outlet } from "react-router-dom";
import Header from "./Header";
import React from 'react'
import './route.css';
const Route = () => {
  return (
    <>
        <Header/>
        <main ><Outlet/></main>
    
    </>
    
  )
}

export default Route