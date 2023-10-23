import express, { json } from "express" 
import morgan from "morgan";
import cors from "cors" 
import history from "connect-history-api-fallback";
import path from 'path';
import { request } from "http";

const app = express();
 
// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true})); 

const dotenv = require("dotenv")
dotenv.config()

// Routes
app.use('/', require('./routes/auth.routes')) 

// middleware for vue
app.use(history());
app.use(express.static(path.join(__dirname, 'public'))); 

// Settings
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), ()=>{
    console.log('server on port 3000', app.get('port'));
})
