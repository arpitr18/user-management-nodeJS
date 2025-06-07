import express, { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/dashboard", authMiddleware ,(req, res) => {
  res.send({ message: `Private Route: Hello Dashboard! ${req.user.name}` });
});

export default router;
