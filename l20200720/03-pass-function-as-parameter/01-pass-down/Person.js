import React from "react";

const Person = props => {
console.log('*****Person****')
console.log(props)
  return (
    <div onClick={props.click}>
      I am {props.name} and I am {props.age} years old<br />
      <em>{props.children}</em>
      <br />
      <br />
    </div>
  );
};


export default Person;
