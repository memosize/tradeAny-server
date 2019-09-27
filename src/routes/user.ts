import * as express from "express";
import { Request, Response } from "express";
import { userModel } from "../model/user";
import { Result } from "range-parser";

export const Router = express.Router();
Router.get("/info", function(req: Request, res: Response) {
  return res.send("<h1>sdfsdf</h1>");
});
Router.get("/register", function(req: Request, res: Response) {
    console.log('register')
  userModel.create(
    {
      type: 1,
      user: "mikis001",
      password: "000000",
      company:'facebook'
    },
    function(e, d) {
      if (e) {
        res.json({ msg: "server error", code: 0 });
      } else {
        res.json({ code: 1 });
      }
    }
  );
});
Router.get("/userlist",function(req:Request,res:Response){
    userModel.findOne({
        user:'mikis001'
    },function(e,d){
        if(e){
          res.json({msg:'server error'})
        }
          res.json({data:d})
    })
})
