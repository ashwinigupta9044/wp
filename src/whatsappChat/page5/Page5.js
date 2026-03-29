import {  Routes, Route ,BrowserRouter } from "react-router-dom";
import React from "react";
import Call5 from "./Call5";
import Chat5 from "./Chat5";

function Page5() {
    return ( 

       <BrowserRouter>
        <Routes>

            <Route path="/chat5" element={<Chat5 />} />
            <Route path="/call5" element={<Call5 />} />
         </Routes>
         </BrowserRouter>
     );
}

export default Page5;  

