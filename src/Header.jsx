import React from "react";



export function Header({color, icon, name, icon2, theClass, theLink}){
    
    return(
        <header className={color}>
           <h1> {icon} {name}</h1>
           <div><a href={theLink} className={theClass}>{icon2}</a></div>
        </header>
    )
}
