import express from 'express'
import { adminLogin, approveCommentById, getAllBlogsAdmin, getAllComments } from '../controllers/adminController.js';

const adminRouter = express.Router();

adminRouter.post("/login", adminLogin);
adminRouter.get("/comments", auth, getAllComments);
adminRouter.get("/blogs", auth, getAllBlogsAdmin);
adminRouter.post("/delete-comment", auth, deleteCommentById);
adminRouter.post("/approve-comment", approveCommentById);
adminRouter.get("/dashboard", auth, getDashboard);



export default adminRouter;