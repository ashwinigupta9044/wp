import React from "react";
import "./nav.css";


function NavBar() {
    return ( 

    <div className="navbar">

        <div>
            <button>
            <span className="icon-img bg" ><img src="nav/dqb.webp" alt="" style={{width:"35px"}}/></span>
            <span><b>Chats</b></span>
            </button>
        </div>

        <div>
            <button>
            <span className="icon-img"><img src="nav/dqi.webp" alt="" style={{width:"35px"}}/></span>
            <span>Updates</span>
            </button>
        </div>

        <div>
            <button>
            <span className="icon-img"><img src="nav/dqe.webp" alt="" style={{width:"35px"}}/></span>
            <span>Communities</span>
            </button>
        </div>

        <div>
            <button>
            <span className="icon-img"><img src="nav/dqa.webp" alt="" style={{width:"35px"}}/></span>
            <span>Call</span>
            </button>
        </div>


        </div>
     );
}

export default NavBar;