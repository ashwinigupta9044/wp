import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./loading.css";  // niche wali CSS file

import VideoPage from "./hach/lode.js";


function Loading() {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // progress badhane ka interval
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);  // stop
          navigate("/livescreen");        // main page pe jao
          return 100;
        }
        return prev + 1;            // speed yaha control karo
      });
    }, 400); // 60ms = ~3 sec me 100%

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="hack-wrapper">

      
     
      <div className="hack-title">WHATSAPP REMOTE IN PROGRESS...</div>

      <div className="hack-status">
        ACCESSING SYSTEM ► {progress}%
      </div>

      <div className="hack-bar-outer">
        <div
          className="hack-bar-inner"
          style={{ width: `${progress}%` }}
        />
      </div>
     
      <br/>
      <VideoPage/>

      
    </div>
  );
}

export default Loading;
