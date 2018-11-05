import express from "express";
import * as bodyParser from "body-parser"; // used to parse the form data that you pass in the request
import routes from "./routes";
import cors from "cors";

class App {
  public app: express.Application;

  constructor() {
    this.app = express(); // run the express instance and store in app
    this.config();
  }

  private config(): void {
    
     this.app.use(cors());
    // support application/json type post data
    this.app.use(bodyParser.json());
    // support application/x-www-form-urlencoded post data
    this.app.use(
      bodyParser.urlencoded({
        extended: false
      })
    );

    this.app.use("/api/v1", routes);
  }
}

export default new App().app;
