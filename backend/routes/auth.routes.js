import express from "express";
import authentication from '../controllers/auth'  
const router = express.Router() 
require('dotenv').config();   

// store donor data in elephantsql
router.post('/donorform', authentication.donorform) ;

module.exports = router;