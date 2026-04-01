
import {Router} from "express";
import {sample_users} from "../data";
import jwt from "jsonwebtoken";
import asyncHandelr from "express-async-handler";
import { User, UserModel } from "../models/user.model";
import { HTTP_BAD_REQUEST } from "../constants/http_status";
import bycrypted from "bcryptjs";
import e from "cors";
const router=Router();
router.get('/seed',asyncHandelr(
  async  (req,res)=>{
    const usersCount=await UserModel.countDocuments();
    if (usersCount>0) {
        res.send("Seed is already done!");
       return;
    }
    await UserModel.create(sample_users);
    res.send("Seed Is Done!")
}
))
router.post('/login', asyncHandelr(
   async (req, res) => {
    const { email, password } = req.body;
    const user =await UserModel.findOne({ email }) ;

    if(user && await bycrypted.compare(password,user.password)){
    res.send(generateTokenRespons(user))

    }else{
        
        res.status(HTTP_BAD_REQUEST).send("Username or password is invalid!");
    }

}
));
router.post('/register',asyncHandelr(
    async(req,res)=>{
        const {name,email,password,address}=req.body;
        const user= await UserModel.findOne({email});
        if (user) {
            res.status(HTTP_BAD_REQUEST).send('User is already exist, please login!');
      return;
        }

        const encryptedPassword=await bycrypted.hash(password,10);
        const newUser:User={
            id:'',
            name,
            email:email.toLowerCase(),
            password:encryptedPassword,
            address,
            isAdmin:false
        }
        const dbUser=await UserModel.create(newUser);
        res.send(generateTokenRespons(dbUser));

    }))
const generateTokenRespons = (user: any) => {
    const token = jwt.sign({
        user:user.id,
        email: user.email,
        isAdmin: user.isAdmin
    }, "someRandomText",
        {
            expiresIn: "30d"
        })

       return {
    id: user.id,
    name: user.name,
    email: user.email,
    address: user.address,
    isAdmin: user.isAdmin,
    token: token
  };
}
export default router;