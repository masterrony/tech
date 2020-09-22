import express from 'express';
import authController from "../controller/authController";
import courseController from '../controller/courseController'
import studentController from '../controller/studentController'
import { verifyToken } from "../middlewares/verifyToken";


const Api = express.Router();

// auth api
Api.use('/auth', authController)

// courses api
Api.use('/courses',  courseController)

// students api
Api.use('/students',  studentController)

export default Api;