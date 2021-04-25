import express from 'express';

//controllers
import { currentUser, privateRoute, privateProductRoute } from '../controllers/auth';

//middleware
import { findOrCreateUser, findOrCreateProduct } from '../middleware';

const router = express.Router();

router.post("/current-user", findOrCreateUser, currentUser);
router.get("/private-route", findOrCreateUser, privateRoute);
router.get('/private-route', findOrCreateProduct, privateProductRoute);

module.exports = router;