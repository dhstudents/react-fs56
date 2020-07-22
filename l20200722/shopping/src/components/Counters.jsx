// removing the local state
import React, { Component } from "react";

import Counter from "./Counter";

class Counters extends Component {
  render() {
    return (
      <>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            // id={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
            // value={counter.value}
          />
        ))}
      </>
    );
  }
}

export default Counters;
