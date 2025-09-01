import express from 'express'

import { loginUser, registerUser, loginAdmin } from '../controllers/userController.js'

const useRouter = express.Router();

useRouter.post('/register', registerUser)
useRouter.post('/login', loginUser)
useRouter.post('/admin', loginAdmin)

export default useRouter