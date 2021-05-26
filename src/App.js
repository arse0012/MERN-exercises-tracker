import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateUser from "./components/createUser";
import CreateExercise from "./components/create-exercise.component";
import EditExercise from "./components/edit-exercise.component";
import ExercisesList from "./components/exercises-list.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Route path="/" component={ExercisesList} />
        <Route path="/user" component={CreateUser} />
        <Route path="/exercise" component={CreateExercise} />
        <Route path="/edit" component={EditExercise} />
        
      </div>
    </Router>
  );
}

export default App;