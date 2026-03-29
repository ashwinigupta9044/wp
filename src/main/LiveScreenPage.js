import React from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//  import Chat from "../whatsappChat/Chat1";
// import Chat2 from "../whatsappChat/Chat2";

import "./phonefream.css";
 import Page2 from "../whatsappChat/page2/Page2";

export default function LiveScreenPage() {
 
  


   useEffect(() => {
    toast.success("Whatsapp Hack Done ", {
      position: "top-right",
      autoClose: 2000,
      theme: "dark"
    });
  }, []);
  

  return (

   

    <div className="Container" style={styles.container}>
      {/* Phone Frame */}
      {/* <div style={styles.phoneFrame}>

        <Chat />
        
       
       
      </div> */}

        <div style={styles.phoneFrame}>

        {/* <Chat2 /> */}
         {/* <Chat /> */}
         <Page2/>
        
       <ToastContainer />

       <audio src="/audio/whatsaapSuccess.mp3" autoPlay  />
       
       
      </div>

      

      {/* Right Side Tool Panel */}
      {/* <div  className="toolPanel">
       <a href="/"  className="toolItem"> <img src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png" alt=""/> </a>

        <a href="/number" className="toolItem"><img alt="" src="https://cdn-icons-png.flaticon.com/512/1828/1828778.png" /></a>
        <a href="#" className="toolItem"></a>
        <a href="#" className="toolItem"></a>
      </div> */}
    </div>

    
  );
}

/* ------------ CSS-in-JS Styles ------------ */
const isSmall = window.matchMedia("(max-width: 600px)").matches;




const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: isSmall ? "column" : "row",
    color: "#fff",
    
  },
  phoneFrame: {
    width: "350px",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#ffffffff",
    borderRadius: "20px",
    border: "1px solid red",
    position: "relative",
    overflow: "hidden",
  },
  modalBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalBox: {
    width: "85%",
    background: "#fff",
    color: "#000",
    padding: "10px",
    borderRadius: "15px",
    border: "2px solid #0a84ff",
    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
  },
  youtubeIcon: {
    fontSize: "40px",
    textAlign: "center",
    marginBottom: "10px",
    color: "red",
  },
  title: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "15px",
  },
  option: {
    display: "flex",
    gap: "10px",
    marginBottom: "10px",
    fontSize: "14px",
  },
  btnRow: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "15px",
    gap: "10px",
  },
  cancelBtn: {
    padding: "8px 15px",
    border: "none",
    background: "#ddd",
    borderRadius: "8px",
  },
  defaultBtn: {
    padding: "8px 15px",
    border: "none",
    background: "#0a84ff",
    color: "#fff",
    borderRadius: "8px",
  },

  //   toolPanel: {
      
        
  //   // width: "80px",
  //   // height: "400px",
  //   background: "#ffffffff",
  //   borderRadius: "10px",
  //   display: "flex",
  //   flexDirection: "column",
  //   flexDirection: isPhone ? "colum" : "row",
   
  //   justifyContent: "space-around",
  //   alignItems: "center",
  //   padding: "10px",
  //   border: "2px solid #ff0000ff",
  // },

  
  // toolItem: {
    
  //   width: "50px",
  //   height: "50px",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   background: "#ffffffff",
  //   border: "2px solid #ff0000ff",
  //   borderRadius: "10px",
  //   marginBottom: "15px",
  //   gap:"10px 10px",
  // },
};

