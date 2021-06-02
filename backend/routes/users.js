const router = require("express").Router();
let User = require("../models/user");

router.route("/")
  .get((req, res) => {
    User.find()
      .then(users => res.json(users))
      .catch(err => res.status(400).json("Error: " + err));
  })
  .post((req, res) => {
    const newUser = new User(req.body);

    newUser.save()
      .then(() => res.json("User added!"))
      .catch(err => res.status(400).json("Error: " + err));
  });

router.route('/:UserId')
  .get((req, res) => {
    User.findById(req.params.UserId)
      .then(user => res.json(user))
      .catch(err => res.status(400).json('Error: ' + err));
  })
  .delete((req, res) => {
    User.findByIdAndDelete(req.params.UserId)
      .then(() => res.json('User deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  })
  .put((req, res) => {
    User.findOneAndUpdate({ _id: req.params.UserId }, req.body, { new: true })
      .then(() => res.json('User updated!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;