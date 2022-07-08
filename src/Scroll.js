import React from "react";

const Scroll = (props)=>{
    return (
        <div style={{
                        overflow:'scroll',
                        height:window.innerHeight-125,
                        border:'1px solid black',
                        margin:5    
                    }}>
            {props.children}
        </div>
    );
}
export default Scroll;