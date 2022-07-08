import React from "react";

const SearchBox = (props)=>{
    return (
        <input type='search' placeholder='search users' onChange={props.changeFunction}/>
    )
}
export default SearchBox;