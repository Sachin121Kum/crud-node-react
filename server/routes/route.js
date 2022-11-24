import express, { Router } from 'express'
import {addUser, allUser,getUser,editUser,deleteUser} from '../controllers/UserController.js'



const router = express.Router();

router.post('/add',addUser)

router.get('/all',allUser)
router.get('/:id',getUser)
router.post('/:id',editUser)
router.delete('/:id',deleteUser)


export default router;