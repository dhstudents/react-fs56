import React from "react";

// inject into index.html as <style> by webpack
import "./Person.component.css";
// module creates unique class names
import btn from "./Button.module.css";

// I  Arrow function
const Person = props => {
  //console.log('*****Person****')
  //console.log(props)
//  console.log(btn)

  const classes = [btn.btn , btn.btn_primary].join(' ')


  return (
    <div className="Person">
      <button className={classes}>Class Me</button>&nbsp;
      <button className={btn.btn}>Me</button>
      <p onClick={props.click} className="mouseon">
        I am {props.name} and I am {props.age} years old
      </p>
      <input type="text" onChange={props.changed} value={props.name} />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <p className={btn.btn}>
        <em className="children">{props.children}</em>
      </p>
      <br />
      <br />
    </div>
  );
};

export default Person;
