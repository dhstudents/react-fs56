import React from 'react'

const CompB = (props) => {
    console.log(props)
    return (
        <div>
            <h1>{props.caption} I am an arrow function</h1>
            {props.children}
        </div>
    )
}

export default CompB