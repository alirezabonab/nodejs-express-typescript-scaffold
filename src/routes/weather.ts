import express = require("express");
import { Request, Response } from "express";

const router = express.Router();

router.get("/:city", (req: Request, res: Response) => {
  const city: string = req.params.city;

  if (!city) {
    return res.status(400).json({
      error: true,
      messsage: "bad request data :("
    });
  }

  let result: { degree: string; status: string };
  let resultNotFound: boolean = false;
  switch (city.toLowerCase()) {
    case "nyc":
      result = { degree: "18C", status: "foggy" };
      break;
    case "stockholm":
      result = { degree: "8C", status: "windy" };
      break;
    case "san-francisco":
      result = { degree: "14C", status: "rainy" };
      break;
    case "tokyo":
      result = { degree: "21C", status: "sunny" };
      break;
    default:
      resultNotFound = true;
  }

  if (resultNotFound) {
    return res.json({
      error: true,
      messsage: "city name not found in DB :("
    });
  } else {
    return res.json(result);
  }
});

export default router;
