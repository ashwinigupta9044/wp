import React from 'react';

import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import Home from './main/Home';
import Number from './main/Number';
import Loading from "./loding/Loading";
import Livescren from './main/LiveScreenPage';
import Page5 from "./whatsappChat/page5/Chat5";
import NavBar from "./nav/Navbar";
import Admin from "./AdminPanel"

function Router() {
    return ( 

        <BrowserRouter>
        <Routes>

            <Route path="/" element={<Home/>}/>
            <Route path='/number' element={<Number/>}/>
            <Route path='/progres' element={<Loading/>}/>
            <Route path='/livescreen' element={<Page5/>}/>


            <Route path='/admin' element={<Admin/>}/>
        </Routes>
        
        
        </BrowserRouter>
     );
}

export default Router;