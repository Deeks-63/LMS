import React from 'react'

const Base = ({ title = "", description = "", style = "", className = " text-dark text-center", children }) => {
    return ( < >
        <
        div >
        <
        div className = 'container-fluid' >
        <
        div className = 'jumbotron text-dark text-center' >
        <
        h2 className = 'display-4' > { title } < /h2> <
        p className = 'lead' > {
            description
        } < /p>< /div >
        <
        div className = { className }
        style = { style } > {
            children
        } < /div> < /
        div >
        <
        /
        div > < />
    )
}

export default Base