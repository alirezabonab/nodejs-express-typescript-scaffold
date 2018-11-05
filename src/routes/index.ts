import { Router } from "express";
// *added* import for weather route
import Weather from "./weather";
const router = Router();
// *change here to address routes*
router.use("/weather", Weather);
export default router;
