import { Router } from './routes/user';
import { mainRoutes } from './controllers/MainController';
import * as express from "express";
import * as bodyParser from "body-parser";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    // support application/json
    this.app.use(bodyParser.json());
    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
    // Routing
    this.app.use("/", mainRoutes);
    this.app.use("/user", Router);

  }
}

export default new App().app;