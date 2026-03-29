import {  Routes, Route ,BrowserRouter } from "react-router-dom";
import React from "react";
import Call2 from "./Call2";
import Chat2 from "./Chat2";

function Page2() {
    return ( 

       <BrowserRouter>
        <Routes>

            <Route path="/chat2" element={<Chat2 />} />
            <Route path="/call2" element={<Call2 />} />
         </Routes>
         </BrowserRouter>
     );
}

export default Page2;  

