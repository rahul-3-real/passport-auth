import { Router } from "express";

const router = Router();

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/google", (req, res) => {
  // Handle passport ggogle login
  res.send("Login with google");
});

router.get("/logout", (req, res) => {
  // Handle passport logout
  res.send("logout");
});

export default router;
