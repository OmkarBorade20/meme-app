
import Button from 'react-bootstrap/Button';
import {useSearchParams} from 'react-router-dom';
import {exportComponentAsJPEG} from 'react-component-export-image'
import {useState,createRef} from 'react'

import Textadd from '../components/textadd'
import './edit.css'



const Edit=()=>{
    const [count,setCount]=useState(0);
    const memeref=createRef()

    function addtext(){
        console.log(count)
        setCount(count+1);
    }

    const [params]=useSearchParams();
    console.log('params',params)
    return (
        
        <div className="edit-container">
            <h3>Edit Image</h3>
                <div ref={memeref}>
                <img className="img" src={params.get("url")} />
                {Array(count).fill(0).map(e=> <Textadd/>)}
            </div>
            <Button style={{width:"10%", margin:"5px"}}variant="primary" onClick={addtext}>Add Text</Button>
            <Button style={{width:"10%",margin:"5px"}} variant="success" onClick={()=>exportComponentAsJPEG(memeref)}>Save</Button>
      
        </div>
    )
}

export default Edit;