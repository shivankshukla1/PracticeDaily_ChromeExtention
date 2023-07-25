import express from 'express';
const app = express();

import cors from 'cors';
// const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,         
   optionSuccessStatus:200,
}

app.use(cors(corsOptions));


import puppeteer from "puppeteer";
import { geekforgeeks } from "./geeksforgeeks.js";
import { leetcode } from "./leetcode.js";

app.listen(5000, ()=>{
    console.log("Server Started");
});

app.get("/getData", async (req, res) => {
    console.log("this is it");
    try {
        // return res.send({status:"error", data:"asdfasdf"});
        const GFG = await geekforgeeks();
        const LC = await leetcode();
        console.log(GFG, LC);
        return res.send({GFG, LC});
    } catch (error) { 
      return res.send({status:"error", data:error});
    }
  });

