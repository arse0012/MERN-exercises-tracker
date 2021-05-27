import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateUser from "./components/create-user";
import CreateExercise from "./components/create-exercise";
import EditExercise from "./components/edit-exercise";
import ExercisesList from "./components/exercises-list";
import TrainersList from "./components/trainers-list";
import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/trainers" component={TrainersList} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;