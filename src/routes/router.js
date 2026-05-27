import { Router } from "express";
import auth from '../routes/auth.js'
const router = Router();

router.use(auth);
