import React from "react";

// I  Arrow function
const Person = props => {
console.log('*****Person****')
console.log(props)
  return (
    <div onClick={props.click} className="mouseon">
      I am {props.name} and I am {props.age} years old<br />
      <input type="text" onChange={props.changed} value={props.name} />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <em className="children">{props.children}</em>
      <br />
      <br />
    </div>
  );
};


export default Person;
