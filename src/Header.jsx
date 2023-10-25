import React from "react";



export function Header({color, icon, name, icon2, theClass2,theClass3, theLink2, theLink3, icon3}){
    
    return(
        <header className={color}>
           <h1> {icon} {name}</h1>
           
           <div className="secondIconDiv">
           <div><a href={theLink2} className={theClass2}>{icon2}</a></div>
           <div><a href={theLink3} className={theClass3}>{icon3}</a></div>
           </div>
        </header>
    )
}
