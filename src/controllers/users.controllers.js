const path = require("path");
const express=require("express");
const transporter=require("../configs/mail");
const Users=require("../models/users.models");

const router= express().Router();


router.get("", async (req, res) => {
    try {
        /* req.query.pagesize = 30 
      req.query.pagesize || 10 returns 30
      req.query.pagesize && 10 returns 10
      
      req.query.pagesize = undefined
      req.query.pagesize || 10 returns 10
      req.query.pagesize && 10 returns undefined
      */

    const page = req.query.page || 1;
    const pagesize = req.query.pagesize || 10; // 30

    // if page = 1 then data should be from 1 to 30
    // if page = 2 then data should be from 31 to 60

    const skip = (page - 1) * pagesize; // 1 - 1 = 0 0 * anything  = 0
    // page = 2 then 2 - 1 = 1 and 1 * pagesize = 30
     

      const users = await Users.find()
      .skip(skip)
      .limit(pagesize)
      .lean()
      .exec();
     
      const totalPages =Maths.ceil(
          (await users.find().countDocuments())/pagesize
      );
      return res.status(200).send({ users,totalPages}); // []
    } catch (err) {
      return res
        .status(500)
        .send({ message: err.message });
    }
  });
  router.post("/", async (req, res) => {
    try {
      const users = await Users.create(req.body);
  
      transporter.sendMail({
        from: '"Amazon admin" <admin@amazon.com>', // sender address
        to: users.senderEmail, // list of receivers
        subject: "Welcome to ABC system {user.first_name}", // Subject line
        text: "Hi {first_name}, Please confirm your email address ", // plain text body
        //   html: "<b>Hello sir/madam Please confirm your email address</b>", // html body
        alternatives: [
          {
            contentType: "text/html",
            path: path.join(__dirname, "../mailers/users-created.mail.html"),
          },
          {
            filename: "users.txt",
            path: path.join(__dirname, "../mailers/users.txt"),
          },
        ],
      });
  
      return res.status(201).send({ message: "Users email has created successfully" });
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
   
   

  module.exports=router;