import {  Routes, Route ,BrowserRouter } from "react-router-dom";
import React from "react";
import Call4 from "./Call4";
import Chat4 from "./Chat4";

function Page4() {
    return ( 

       <BrowserRouter>
        <Routes>

            <Route path="/chat4" element={<Chat4 />} />
            <Route path="/call4" element={<Call4 />} />
         </Routes>
         </BrowserRouter>
     );
}

export default Page4;  

