import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  render() {
    return (
      <div>
        <div>
          <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <ul className="navbar-nav mr-auto">
              <a className="navbar-brand">Exercise Log</a>
              <li className="navbar-item"><Link to="/" className="nav-link">Exercises</Link></li>
              <li className="navbar-item"> <Link to="/create" className="nav-link">Create Log</Link></li>
              <li className="navbar-item"><Link to="/trainers" className="nav-link">Trainers</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;