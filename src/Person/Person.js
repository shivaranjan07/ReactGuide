import React from 'react'

let person = (props) => {
    return (
    <div>
        <p>I am {props.name} and age is {props.age}</p>
        <p>{props.children}</p>
    </div>
    )
}
export default person;