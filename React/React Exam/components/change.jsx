import { useState } from "react";

const ColChange = () => {
let [color, setcolor] = useState("lightgrey")
const handleCol = () => {
    let Newcol = "#" + Math.floor(Math.random() * 10000000).toString(16)
    setcolor(Newcol)
}


    return(
        <div className="colchange"
        style={{
            backgroundColor: color
        }}>
            <button style={{
                marginLeft: "30px",
                marginTop: "90px",
            }} onClick={handleCol}>Change</button>
        {color}
        </div>
    )
}
export default ColChange;