import {  Routes, Route ,BrowserRouter } from "react-router-dom";
import React from "react";
import Call3 from "./Call3";
import Chat3 from "./Chat3";

function Page3() {
    return ( 

       <BrowserRouter>
        <Routes>

            <Route path="/chat3" element={<Chat3 />} />
            <Route path="/call3" element={<Call3 />} />
         </Routes>
         </BrowserRouter>
     );
}

export default Page3;  

