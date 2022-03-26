const express= require("express");


const usersControllers=require("./controllers/users.controllers");

const app= express();

app.use(express.json());

app.users("/users",usersControllers)
module.exports=app;