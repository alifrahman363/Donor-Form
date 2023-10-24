import express from "express";
import authentication from '../controllers/auth'
const router = express.Router()
require('dotenv').config();

// store donor data in elephantsql
// router.post('/donorform', authentication.donorform);
router.get('/data', authentication.data);

// router.get('/data', async (req, res) => {
//     // const query = 'testinggg connection';
//     // res.json(query);
//     try {

//         const response = 'check new';
//         const data = response.data;
//         res.json(response);
//     } catch (error) {
//         console.log(error);
//     }
// });


module.exports = router;