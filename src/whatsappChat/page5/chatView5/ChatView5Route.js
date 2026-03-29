
import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Arjun from "./Arjun";
import Rohit from "./Rohit";
import Kavya from "./Kavya";


export default function ChatView5Route() {
    return (    
        <Router>
            <Routes>
                <Route path="/chat5/arjun" element={<Arjun />} />
                <Route path="/chat5/rohit" element={<Rohit />} />
                <Route path="/chat5/kavya" element={<Kavya />} />
            </Routes>
        </Router>
    );
}