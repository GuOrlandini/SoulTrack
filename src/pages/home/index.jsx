import React from "react";
import Navbar from "../../components/navbar";
import { Container } from "@mui/material";


export default function Home(){
    return(
        <body>
            <Navbar />
            <Container sx={{ bgcolor: '#DCD6FF', height: '100vh' }}>
                <h1>oii</h1>
            </Container>
        </body>
       
    );
}