import * as express from "express";
import { Request, Response } from "express";
import { userModel } from "../model/user";
import { Result } from "range-parser";

export const Router = express.Router();
Router.get("/info", function(req: Request, res: Response) {
  return res.send("<h1>sdfsdf</h1>");
});
Router.post("/register", function(req: Request, res: Response) {
    console.log('register')
    console.log(req)
    console.log("------------------")
    const { user, password, type,email } = req.body;
    console.log(user)
    userModel.findOne({user}, function(err, doc) {
    // userModel.remove({}, function(err) {})
  if (doc) {
        return res.json({ code: 1, msg: "用户名重复" });
      }
      userModel.create({ user, type,email, pwd:password }, function(e, d) {
        if (e) {
          return res.json({ code: 1, msg: "后端出错了" });
        }
        return res.json({ code: 0 });
      });
    });
});
Router.get("/userlist",function(req:Request,res:Response){
    userModel.findOne({
      
    },function(e,d){
        if(e){
          res.json({msg:'server error'})
        }
          res.json({data:d})
    })
})
