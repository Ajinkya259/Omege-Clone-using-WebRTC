import { useState } from "react";
import { Link } from "react-router-dom";
export const Landing=()=>{
    const [name,setname]=useState("");
    { return <div>
        <input type="text" onChange={(e)=>
        {
            setname(e.target.value)
        }}>
            
        </input>
        <Link to={`/Room/?name=${name}`}>Join</Link>
    </div>
}}