import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import User from '../models/userModel.js';
// Fetch all users
// GET/admin/users
// Public
router.get('/', asyncHandler(async (req, res) => {
  console.log("Users");
  const users = await User.find({});
  res.json(users);
}));
// Fetch each user
// GET/admin/users/:id
// Public
router.get('/:id', asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found!");
  }
}));

router.post('/admin/users', asyncHandler(async (req, res) => {
  res.send('Admin Successfully registered!');
  try {
    const user = await User.add({ userId: req.user.id, ...req.body });
      user.save().then(user => res.json(user));
      } catch (error) {
        res.status(404);
        res.send('User not created!');
    }
}));

export default router;