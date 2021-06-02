import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  render() {
    return (
      <div>
        <div className="nav navbar-light navbar-expand-lg">
          <nav className="nav blue darken navbar-nav ml-auto">
            <h1 className="nav-brand">Exercise Log</h1>
            <li className="nav-item"> <Link to="/" className="nav-link">Exercises</Link></li>
            <li className="nav-item"> <Link to="/create" className="nav-link">Create Log</Link></li>
            <li className="nav-item"> <Link to="/trainers" className="nav-link">Trainers</Link></li>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;