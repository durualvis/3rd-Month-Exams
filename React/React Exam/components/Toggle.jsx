import { useState } from "react";

const Toggle = () => {
let [text, settext] = useState("")
let [tag, settag] = useState(false)
const handleShow = () => {
    if(tag == true){
        settext("Hello World")
        settag(false)
    }else{
        settext("")
        settag(true)
    }
}

    return(
        <div className="toggle">
            <h1 style={{
                textAlign: "center"
            }}>{text}</h1>
            <button style={{
                marginLeft: "38px"
            }} onClick={handleShow}>{tag == true? "Show": "Hide"}</button>
        </div>
    )
}
export default Toggle;

