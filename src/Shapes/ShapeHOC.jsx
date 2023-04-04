import React from "react";

const ShapeHOC = ({shape, handleClick, inset=true}) => {
    return(
        <button id={shape} className={inset?'inset':''}
        onClick={() => {handleClick(shape)}}
        ></button>
    )
}

export default ShapeHOC