const router = require("express").Router();
let Exercise = require("../models/exercise");

router.route("/")
  .get((req, res) => {
    Exercise.find()
      .then(exercises => res.json(exercises))
      .catch(err => res.status(400).json("Error: " + err));
  })
  .post((req, res) => {
    const newExercise = new Exercise(req.body);

    newExercise.save()
      .then(() => res.json("Exercise added!"))
      .catch(err => res.status(400).json("Error: " + err));
  });

router.route('/:EventId')
  .get((req, res) => {
    Exercise.findById(req.params.EventId)
      .then(exercise => res.json(exercise))
      .catch(err => res.status(400).json('Error: ' + err));
  })
  .delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.EventId)
      .then(() => res.json('Exercise deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  })
  .put((req, res) => {
    Exercise.findOneAndUpdate({ _id: req.params.EventId }, req.body, { new: true })
      .then(() => res.json('Exercise updated!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;