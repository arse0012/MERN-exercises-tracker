import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateTrainer from "./components/NewTrainer";
import CreateExercise from "./components/NewExercise";
import EditExercise from "./components/EditExercise";
import ExercisesList from "./components/ExerciseList";
import TrainerList from "./components/TrainerList";
import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <br />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/newexercise" component={CreateExercise} />
        <Route path="/trainers" component={TrainerList} />
        <Route path="/newtrainer" component={CreateTrainer} />
      </div>
    </Router>
  );
}

export default App;