import React, { useRef } from 'react';
import ReactToPrint from "react-to-print";
import Resume from "./Resume";
import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {

  const componentRef = useRef();
  


  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#works">Works</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
        <li>
        <div>
          <ReactToPrint
           trigger={() => <button> Print this out! </button>}
           content={() => componentRef.current}/>
           <Resume ref={componentRef} />
      
         </div>
        </li>
      </ul>
    </div>
  );
}