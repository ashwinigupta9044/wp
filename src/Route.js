import React from 'react';

import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import Home from './main/Home';
import Number from './main/Number';
import Loading from "./loding/Loading";
import Livescren from './main/LiveScreenPage';
import Page5 from "./whatsappChat/page5/Chat5";
import NavBar from "./nav/Navbar";
import Admin from "./AdminPanel";
import Login from "./auth/LoginPage";
import Page4 from  "./whatsappChat/page4/Chat4";
// import Page3 from  "./whatsappChat/page3/Chat3";
// import Page2 from  "./whatsappChat/page2/Chat2";
// import Page1 from  "./whatsappChat/page/";
import Pricing from './Pricing';

function Router() {
    return ( 

        <BrowserRouter>
        <Routes>
            <Route path='/price' element ={<Pricing/>}/>
            <Route path='/' element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path='/number' element={<Number/>}/>
            <Route path='/progres' element={<Loading/>}/>
            <Route path='/livescreen' element={<Page4/>}/>


            <Route path='/admin' element={<Admin/>}/>
        </Routes>
        
        
        </BrowserRouter>
     );
}

export default Router;