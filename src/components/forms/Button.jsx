import React from 'react';

const Button = ({ name, classes = "btn", type = "submit" }) => {
    return (
        <>
        <button type={type} class={classes}><span>{name}</span></button>
        </>
    )

}
export default Button
