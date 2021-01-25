import React from "react"
import ErrorImg from "../images/error4.jpg"
import "bootstrap"
const img={
    "Ename":ErrorImg

            }

function Error(){
   return( <div>
        <img src={img.Ename} />
        <button className="btn">Login</button>
        <h3>Hello world</h3>
    </div>  
   )  
}
export default Error