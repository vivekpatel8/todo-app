import React from 'react'

export const Footer = () => {
    let footerstyle = {
        position : "absolute",
        top : "100vh",
        width : "100%",
    }
    return (
        <div className="bg-dark text-light py-3" style={footerstyle}>
            Footer works !
        </div>
    )
}
