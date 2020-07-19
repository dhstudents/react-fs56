import React, { useState } from "react";
import "./styles.css";
import Person from "./component/Person/Person.component";

const App = props => {
  // I changing state will re-render all components
  const [personsState, setpersonsState] = useState({
    persons: [
      { name: "Bumblebee", age: 203 },
      { name: "Optimus Prime", age: 243 },
      { name: "Wing Saber", age: 9 },
      { name: "Megatron", age: 90 }
    ],
    morestate: "pick pack"
  });

  console.log(setpersonsState);
  console.log(personsState);
// loosing state problem !!!!!!!
// state slices
//-------------
// separate it to many useState for each kind of state
// const [morestate , setMoreState] = useState('tick tack')
  const switchNameHandler = e => {
// we set only persons and loose other state items
    setpersonsState({
      persons: [
        { name: "Bumblebee", age: 1203 },
        { name: "Optimus Prime", age: 1243 },
        { name: "Wing Saber", age: 1119 },
        { name: "Megatron", age: 11190 }
      ]
    });
    // will rerendered application
  };

  return (
    <div className="App">
      <h4>class</h4>
      <hr />
      {/* onClick={someHndler} we padd only function address , we dont execute it */}
      <button onClick={switchNameHandler}>Switch Name</button>
      <hr />
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default App;
