var express = require("express");
var router = express.Router();
var TaskModel = require("../models/task");

router.get("/", function(req, res, next) {
  TaskModel.find().then(tasks => res.json(tasks));
});

//login for admin
router.get('/loginAdmin', (req, res) => {
  res.render('loginA')
})

//will work on this after the database is pushed  -victor

// router.post('/loginAdmin', function(req, res, next) {
//   models.tasks
//     .findOne({
//       where: {
//         Username: req.body.usernameA,
//         Password: req.body.passwordA
//       }
//     })
//     .then(task => {
//       if (task) {
//         res.send('Admin Login succeeded!');
//       } else {
//         res.send('Invalid Admin login!');
//       }
//     });
// });

//login for users
router.get('/login', (req, res) => {
  res.render('loginU')
})

// router.post('/login', function(req, res, next) {
//   models.tasks
//     .findOne({
//       where: {
//         Username: req.body.username,
//         Password: req.body.password
//       }
//     })
//     .then(task => {
//       if (task) {
//         res.send('Login succeeded!');
//       } else {
//         res.send('Invalid login!');
//       }
//     });
// });

//logout
router.get('/logout', function (req, res, next) {
  // res.cookie('jwt', "", { expires: new Date(0) });
  res.redirect('/tasks/login');
});


router.post("/", function(req, res, next) {
  let newTask = new TaskModel();
  newTask.name = req.body.name;
  newTask.complete = req.body.complete;
  newTask.save().then(task => res.json(task));
});

router.delete("/:id", function(req, res, next) {
  TaskModel.findByIdAndRemove(req.params.id, (err, task) => {
    if (err) return res.status(400).send(err);
    res.send(task);
  });
});

router.put("/:id", function(req, res, next) {
  TaskModel.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      complete: req.body.complete
    },
    { new: true },
    (err, task) => {
      if (err) return res.status(400).send(err);
      res.send(task);
    }
  );
});

module.exports = router;
