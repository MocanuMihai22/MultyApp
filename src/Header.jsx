import React from "react";



export function Header({color, icon, name, icon2, theClass2,theClass3, theLink2, theLink3, icon3}){

    

    function handleDarkClick(){
        document.body.classList.remove("light")
        document.body.classList.add("dark")

        console.log("dark")
    }

    function handleLightClick(){
        document.body.classList.remove("dark");
        document.body.classList.add("light")
        console.log("light")
    }

    function handleAxiomTexture(){
        document.body.classList.remove("cubes-pattern")
        document.body.classList.add("axiom-pattern")
    }
    function handleCubesTexture(){
        document.body.classList.remove("axiom-pattern")
        document.body.classList.add("cubes-pattern")
    }
    return(
        <header className={color}>
           <h1> {icon} {name}</h1>
           <div className="pickerDiv">
           
           <h3>Pick a Background style:</h3>
           <div className="pickerButtons">
                <button onClick={handleLightClick} className="button-style">Light</button>
                <button onClick={handleDarkClick} className="button-style">Dark</button>
                <button onClick={handleAxiomTexture} className="button-style">Texture 1</button>
                <button onClick={handleCubesTexture} className="button-style">Texture 2</button>
            </div>
           </div>
           <div className="secondIconDiv">
           <div><a href={theLink2} className={theClass2}>{icon2}</a></div>
           <div><a href={theLink3} className={theClass3}>{icon3}</a></div>
           </div>
        </header>
    )
}
