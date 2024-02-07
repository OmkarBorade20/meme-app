import Draggable from 'react-draggable'
import { useState } from 'react'


const Textadd=()=>{
    const [iseditable,setIseditable]=useState(false)
    const [value,setValue]=useState('Double click to Edit.')
    return (
        <div className="textfield">
        <Draggable>
            {
                iseditable?<input  onDoubleClick={(e)=>setIseditable(false)} value={value} onChange={(e)=>setValue(e.target.value)}/>:<h1 onDoubleClick={(e)=>setIseditable(true)}>{value}</h1>
            }
        </Draggable>
        </div>
       
    );
}

export default Textadd;