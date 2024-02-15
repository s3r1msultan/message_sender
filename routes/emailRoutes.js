import { Router } from "express";
import { sendEmail } from "../controllers/sendEmail.js";

const sendRoutes = Router();

sendRoutes.post("/", sendEmail);

export default sendRoutes;
