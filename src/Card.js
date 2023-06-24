

import React from 'react'; 
import ReactDOM from 'react-dom'; 
  
const Card = () => {
    const image ="https://i.imgur.com/MK3eW3Am.jpg";
    const myName = "Katherine Johnson"
   
    

    return(
        <div>
         <h1>Hi {" all Iam " + myName  } </h1>
        <img
            className="avatar"
            src={image}
            alt={myName}
        />
      
        <p style = {{
            backgroundColor : 'black',
            color : 'white'
        }}>
            i dont know who she is !!!
        </p>
       
        </div>
    );
 }


export default Card;