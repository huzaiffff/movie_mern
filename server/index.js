import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import mongoose from "mongoose";
import "dotenv/config";
import routes from "./src/routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1", routes);

const port = process.env.PORT || 5000;

const server = http.createServer(app);



mongoose.connect("mongodb://localhost:27017/", {useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
  console.log("Connected to the database");
})
.catch(err =>
{
  console.log("Cannot Connect to the database",err);
  process.exit();
});



app.listen(5001, ()=>{
  console.log('Server is running up at port 5000');
})