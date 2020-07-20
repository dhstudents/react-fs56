import React, { Component } from "react";
// import "./styles.css";
import "./App.css";
import Person from "./components/Person";
import CompA from './components/CompA'

export default class App extends Component {
    state = {
        persons: [
            { name: "Bumblebee", age: 203 },
            { name: "Optimus Prime", age: 243 },
            { name: "Wing Saber", age: 9 },
            { name: "Megatron", age: 90 },
            { name: "Kofiko", age: 190 }
        ]
    };

    render() {
        const allPersons = this.state.persons.map( p => <Person name={p.name} age={p.age} />     )

        return (
            <div className="App">
                <CompA  title="Hello">Fix it boy</CompA>
                <button>Change All</button>
                {allPersons}
            </div>
        );
    }
}
