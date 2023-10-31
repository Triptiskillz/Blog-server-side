import express from 'express';
import {signupUser,loginUser} from '../controller/user-controller.js'
const router =express.Router();

router.post('/signup',signupUser);
router.post('/signup',loginUser);

export default router;