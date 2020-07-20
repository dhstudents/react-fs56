import React from "react";
import "./styles.css";
import Person from "./component/Person/Person.component";

export default function App() {
  return (
    <div className="App">
      <Person name="Danny" age="65" />
{/* simple */}
      <Person name="David" age="15">My Hobbies: Reading Tech Books</Person>
{/* tree */}
      <Person name="Rebeka" age="25">
        <ol>
          <li>One</li>
          <li>two</li>
        </ol>
      </Person>
    </div>
  );
}
