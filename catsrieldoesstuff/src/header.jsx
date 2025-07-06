import React from "react";
import catsrieldreemurr from "./assets/catsrieldreemurr.png"
import menudots from "./assets/menu-dots-circle-svgrepo-com.svg";

function PageHeader(){
    return(
        <nav className="HeaderBox">
            <ul>
                <li>
                    <img src={catsrieldreemurr} width={200}></img>
                </li>
            </ul>
        </nav>
    )
}

export default PageHeader;