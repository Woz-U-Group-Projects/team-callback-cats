import express from 'express';

//controllers
import { currentUser, privateRoute } from '../controllers/auth';

//middleware
import { findOrCreateUser } from '../middleware';

const router = express.Router();

router.post("/current-user", findOrCreateUser, currentUser);
router.get("/private-route", findOrCreateUser, privateRoute);

module.exports = router;