import React from "react";
import Card from "./Card";
console.log(Card);
const CardArray = (props)=>{
    return (
        <div>
            {
                props.users.map((value,i)=><Card key={i} users={value}/>)
            }
        </div>
    );
}

export default CardArray;