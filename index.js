import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();

//global objects
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//middleware logic
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//restful logic
//how to get all users info
app.get("/rest/getAllUsers",(req,res) => {
    fs.readFile(__dirname+"/"+"users.json",
    (err,data) => {
        res.end(data);
    });
})

//server logic
app.listen(4000,()=>{
    console.log("server running on port 4000");
})