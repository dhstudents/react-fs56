import React from "react";


// inject into index.html as <style> by webpack
import './Person.component.css'

// I  Arrow function
const Person = props => {
console.log('*****Person****')
console.log(props)
  return (
    <div className="Person">
      <p onClick={props.click} className="mouseon">I am {props.name} and I am {props.age} years old</p>
      <input type="text" onChange={props.changed} value={props.name} />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <p><em className="children">{props.children}</em></p>
      <br />
      <br />
    </div>
  );
};


export default Person;
