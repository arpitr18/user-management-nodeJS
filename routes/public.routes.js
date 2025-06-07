import express, { Router } from "express";
import { generateToken } from "../utils/token-utils.js";

const router = Router();

router.get("/generate-token", (req, res) => {
  const token = generateToken();

  res.status(200).send({
    message: "Token generated successfully",
    token: token,
  });
});

// Public route example
router.get("/home", (req, res) => {
  res.send({ message: "Public Route: Hello, World!" });
});

// Export the router
export default router;