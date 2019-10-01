import * as express from "express";
import { Request, Response } from "express";
import { userModel } from "../model/user";

export const Router = express.Router();
Router.get("/info", function(req: Request, res: Response) {
  return res.send("<h1>sdfsdf</h1>");
});
Router.post("/register", function(req: Request, res: Response) {
  const { user, pwd, type, email, nick } = req.body;
     // userModel.remove({}, function(err) {})

    userModel.findOne({ user }, function(err, doc) {
    if (doc) {
      return res.json({ code: 1, msg: "username repeat" });
    }
    userModel.create({ user, type, email, nick, pwd: pwd }, function(
      error: any,
      doc: any
    ) {
      if (error) {
        return res.json({ code: 1, msg: "server error" });
      }
      return res.json({ code: 0 });
    });
  });
});
Router.get("/userlist", function(req: Request, res: Response) {
  userModel.findOne({}, function(error, doc) {
    if (error) {
      res.json({ msg: "server error" });
    }
    res.json({ data: doc });
  });
});
