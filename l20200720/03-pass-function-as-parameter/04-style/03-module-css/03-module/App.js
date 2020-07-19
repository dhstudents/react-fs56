import React from "react";
import "./styles.css";
import Person from "./component/Person/Person.component";

export default class App extends React.Component {
  // I changing state will re-render all components
  state = {
    persons: [
      { name: "Bumblebee", age: 203 },
      { name: "Optimus Prime", age: 243 },
      { name: "Wing Saber", age: 9 },
      { name: "Megatron", age: 90 }
    ]
  };

  switchNameHandler = (newName) => {
    this.setState({  
      persons: [
        { name: newName, age: 1203 },
        { name: "Optimus Prime", age: 1243 },
        { name: "Wing Saber", age: 1119 },
        { name: "Megatron", age: 11190 }
      ]
    })
  };


nameChangeHandler = event => {
  this.setState({  
    persons: [
      { name: "Bummblebee", age: 1203 },
      { name: "Optimus Prime",  age: 1243 },
      { name: event.target.value, age: 1119 },
      { name: "Megatron", age: 11190 }
    ]
  })
}

  render() {
// create onject with style specification
// this object can be dynmicaly changed
const btnStyle ={
            // background-color : white  dont work in js
              backgroundColor: 'lightgray',  // dont forget it is an object 
              font: 'inhrit',
              border: '1px solid blue',
              padding: '8px',
              cursor: 'pointer'
          }
    return (
      <div className="App">
        <h4>class</h4>
        <hr />
        {/* onClick={someHndler} we padd only function address , we dont execute it */}
        <button style={btnStyle}  onClick={this.switchNameHandler.bind(this, 'Kofiko')}>Switch Name</button>
        <hr />
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Pop Machine Bind')}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={ () => this.switchNameHandler('Flick Flack Arrow')}
        >
Hobbies: painting
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          changed={this.nameChangeHandler}
        />
      </div>
    );
  }
}

