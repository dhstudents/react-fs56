import React, { Component } from "react";

class Navbar extends Component {
  render() {
    console.log(this.props);
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand">
          Navbar
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCounters}
          </span>
        </span>
      </nav>
    );
  }
}

export default Navbar;
