const router = require("express").Router();
let Trainer = require("../models/trainerModel");

router.route("/")
  .get((req, res) => {
    Trainer.find()
      .then(trainers => res.json(trainers))
      .catch(err => res.status(400).json("Error: " + err));
  })
  .post((req, res) => {
    const newTrainer = new Trainer(req.body);

    newTrainer.save()
      .then(() => res.json("Trainer added!"))
      .catch(err => res.status(400).json("Error: " + err));
  });

router.route('/:TrainerId')
  .get((req, res) => {
    User.findById(req.params.TrainerId)
      .then(trainer => res.json(trainer))
      .catch(err => res.status(400).json('Error: ' + err));
  })
  .delete((req, res) => {
    User.findByIdAndDelete(req.params.UserId)
      .then(() => res.json('Trainer deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  })
  .put((req, res) => {
    User.findOneAndUpdate({ _id: req.params.TrainerId }, req.body, { new: true })
      .then(() => res.json('Trainer updated!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;