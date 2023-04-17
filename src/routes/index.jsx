import {Route, BrowserRouter, Routes} from "react-router-dom";
import Home from "../pages/home";

export default function AppRoutes(){
    
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/" element={<h1>teste</h1>} /> */}
                
            </Routes>  
        </BrowserRouter>
    
    )
} 
