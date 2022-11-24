import express from 'express';
import connection from './database/db.js';
import Routes from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();
const PORT = 8001;
app.use(cors());

app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}));


connection();


app.use('/',Routes)
app.listen(PORT, ()=>{
    console.log("Server Started")
})