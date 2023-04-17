import React from "react";
import "./styles.css";
import { Button } from "@mui/material";
import Botao from "./botao";

export default function Navbar(){
    return (
        <nav className="navbar">
            <div>
                <a href="/"> <img className="logo" src="https://i.imgur.com/vAHctjm.png"/> </a>
            </div>
         <ul className="navlinks">  
        <li><Botao/></li> 
        </ul>
            
    </nav>
    );
}