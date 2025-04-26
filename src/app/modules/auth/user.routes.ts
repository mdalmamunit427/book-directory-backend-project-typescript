import { Router } from 'express';
import { registerUser, loginUser } from './user.controller';

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

export const AuthRoutes = router; 