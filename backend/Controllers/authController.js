//In this file we will manage login ad registratioj file
import User from '../models/UserSchema.js';
import Doctor from '../models/DoctorSchema.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const login =async(req,res)=>{
    const {email,password,name,role,photo,gender}=req.body;
    try {
        let user = null;

        if(role==="patient"){
            user = await User.findOne({email})
        }else if(role==="doctor"){
            user = await Doctor.findOne({email})
        }
        //check if user is exist or not
        if(user){
            return res.status(400).json({message:'user already exists'})
        }

        //hash password
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        if(role==="patient"){
            user = new User({
                name,
                email,
                password:hashPassword,
                gender,
                photo,
                role
            })
        }

        if(role==="doctor"){
            user = new Doctor({
                name,
                email,
                password:hashPassword,
                gender,
                photo,
                role
            })
        }

        await user.save()
        res.status(200).json({success:true,message:'user successfully saved'})


    } catch (error) {
        res.status(500).json({success:false,message:'error is coming try again'})
    }

};

export const register =async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
};