
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import {useNavigate} from 'react-router-dom'



const Cards=(props)=>{
    const navigate=useNavigate();
    return (
        <div className='card-container'>

            <Card style={{ width: '18rem', margin:'25px'}}>
                <Card.Img style={{width:"300px",height :"250px"}}variant="top" src={props.imgurl} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Button onClick={(e)=>navigate(`/edit?url=${props.imgurl}`)}   variant="primary">Edit</Button>
                </Card.Body>
                </Card>

        </div>
       
    )
}

export default Cards;