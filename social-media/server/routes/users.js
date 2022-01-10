// this is for adding routes only. We do not add logic into this file

import express from 'express';
import { signin, signup } from '../controllers/user.js'


const router = express.Router();

router.post('/signin', signin); // post because we are sending information over 
router.post('/signup', signup); 

export default router