import jwt from 'jsonwebtoken';
import Blog from '../models/Blog.js';
import Comment from '../models/Comment.js';


export const adminLogin = async (req, res)=>{
    try{
        const{email, password} = req.body;
        if(email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD){
            return res.json({sucess: false, message:"Invalid Credentials"})
        }

        const token = jwt.sign({email}, process.env.JWT_SECRET)
        res.json({sucess: true, token})
    }catch(error){
         res.json({sucess: false, message: error.message})
    }
}

export const getAllBlogsAdmin = async (req, res)=>{
    try{
        const blogs = await Blog.find({}).sort({createdAt: -1});
        res.json({sucess: true, blogs})
    } catch(error){
        res.json({success: false, message: error.message})
    }   
}

export const getAllComments = async (req, res) => {
    try{
        const comments = await Comment.find({}).
        sort({createdAt: -1}).populate('blog');
        res.json({success: true, comments});
    } catch(error){
        res.json({success: false, message: error.message})
    }
}

