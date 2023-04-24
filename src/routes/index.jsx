import {Route, BrowserRouter, Routes} from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Navbar from "../components/navbar";

export default function AppRoutes(){
    
    return(
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pages/about/index.jsx" element={<About />} />               
            </Routes>  
        </BrowserRouter>
    
    )
} 
