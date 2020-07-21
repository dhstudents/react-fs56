import React from "react";
import classes from './Person.module.css'

// I  Arrow function
const Person = props => {
    console.log(classes)
    console.log(props)
    return (
        <div>
            I am {props.name} and I am {props.age} years old
            <button className={classes.btn}>Change Name</button>
        </div>
    );
};

export default Person