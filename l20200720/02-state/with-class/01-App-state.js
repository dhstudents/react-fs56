import React from "react";
import "./styles.css";
import Person from "./component/Person/Person.component";

export default class App extends React.Component {
  // *** changing state will re-render all components ***
  // one big monolitic object contains all state items
  state = {
    persons: [
      { name: "Bumblebee", age: 203 },
      { name: "Optimus Prime", age: 243 },
      { name: "Wing Saber", age: 9 },
      { name: "Megatron", age: 90 }
    ]
  };

  render() {
    return (
      <div className="App">
        <h4>class</h4>
        <hr />
        <button>Switch Name</button>
        <hr/ >
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].name} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].name} />
      </div>
    );
  }
}

// export default function App() {
//   return (
//     <div className="App">
//     <h4>function/h4>
//     <hr />
//       <button>Switch Name</button>
//       <Person name="Danny" age="65" />
// {/* simple */}
//       <Person name="David" age="15">
//         My Hobbies: Reading Tech Books
//       </Person>
// {/* tree */}
//       <Person name="Rebeka" age="25">
//         <ol>
//           <li>One</li>
//           <li>two</li>
//         </ol>
//       </Person>
//     </div>
//   );
// }
