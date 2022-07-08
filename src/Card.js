import React from "react";

const Cart = (props)=>{
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robot' src={`https://robohash.org/${props.users.id}?150x150`}/>
            <div>
                <h2>{props.users.name}</h2>
                <p>{props.users.email}</p>
            </div>
        </div>
    );
}
export default Cart;