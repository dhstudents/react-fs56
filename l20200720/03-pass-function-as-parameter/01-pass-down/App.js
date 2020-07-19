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

  switchNameHandler = (e) => {
    //console.log('click');
    //console.dir(e.target);
    // X 
    // this.state.persons[0].name = 'Smart Phone' 
    // V
    this.setState({  
      persons: [
        { name: "Bumblebee", age: 1203 },
        { name: "Optimus Prime", age: 1243 },
        { name: "Wing Saber", age: 1119 },
        { name: "Megatron", age: 11190 }
      ]
    })
    // will rerendered application

  };

  render() {
    return (
      <div className="App">
        <h4>class pass function as parameter to component</h4>
        <hr />
        {/* onClick={someHndler} we padd only function address , we dont execute it */}
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <hr />
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler}>
                    Hobbies: painting
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

