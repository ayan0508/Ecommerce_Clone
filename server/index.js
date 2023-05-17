import express from 'express';
import Connection from './Database/db.js';
import dotenv from 'dotenv';
import DefaultData from './default.js';
import Router from './routing/routing.js';
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();
dotenv.config();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json({extend: true}));
app.use(bodyParser.urlencoded({extend: true}));
app.use('/',Router);


const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME,PASSWORD);
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
});
DefaultData();
