import React from "react";

// I  Arrow function
const Person = props => {
  return (
    <div>
      I am {props.name} and I am {props.age} years old
    </div>
  );
};

// II function
// function Person(props) {
// console.log(props)
//   return (
//     <div>
//       I am {props.name} and I am {props.age} years old<br />
//       <em>{props.children}</em>
//       <br />
//       <br />
//     </div>
//   );
// }

// import React , { Component} from "react";
// class Person extends Component {
// this.props
  
// III class
// class Person extends React.Component {
//   render() {
//     return (
//       <div>
//         I am {this.props.name} and I am {this.props.age} years old
//       </div>
//     );
//   }
// }

export default Person;
