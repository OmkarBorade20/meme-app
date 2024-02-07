import 'bootstrap/dist/css/bootstrap.css';
import Cards from "./Cards"
import {useState,useEffect} from 'react'
import {memeapi} from '../api/mems'
import './home.css'


const Home=()=>{

const [memes,setMemes]=useState([])

    useEffect(()=>{
        FetchingMemes()
    },[])

    async function FetchingMemes(){
            let data= await memeapi();
            console.log('Fetched Data :',data)
            setMemes(data);
    }

    return (
        <div className="memes">
            {memes?.map(e=><Cards key={e.id} imgurl={e.url} title={e.name}/>)}
        </div>
    )
}

export default Home;