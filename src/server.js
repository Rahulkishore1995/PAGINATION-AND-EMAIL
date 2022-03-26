const app=require("./index");

const connect =require("./configs/db");

app.listen(4112,async(req,res)=>{
    await connect();
    console.log("listening at port 4112");
})